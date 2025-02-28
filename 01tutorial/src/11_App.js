import '.'
import Header from './8_Header'
import AddItem from './9_AddItem'
import Content from './8_Content';
import Footer from './8_Footer'
import SearchItem from './9_SearchItem'
import {useState, useEffect} from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [newItem, setNewItem] = useState ('')
  const [search, setSearch] = useState ('')
  console.log('BeforeUseEffect')

  useEffect(() => {
    // this runs every time a component renders
    console.log('InsideUseEffect') // It is asynchronous, it's running after everything renders
    // console.log('during load time')
  }, [items]) // with [] it only renders at load time
  // [] is the dependency, so if the dependency changes than it runs
  // if you put [items], it will change when items changes (so when adding or removing items)

// example of use
  useEffect(() => {
    //setItems(JSON.parse(localStorage.getItem('shoppinglist')) || []) },[])
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [])

  console.log('AfterUseEffect')

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])


  const addItem = (item) => {
      // one way (not to my liking)
      //const id = items.length ? items[item.length-1] : 1
      // this will work even if ids are not in order
      const id = items.length ? items.reduce((max, item) => (item.id > max ? item.id : max), 0)+1 : 1;
      const myNewItem = {id, checked: false, item};
      const listItems = [...items, myNewItem]
      setItems(listItems)
  }

  const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
        setItems(listItems)
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
    }

    const handleSubmit = (e) => {
      /* This is so that the page doesn't reload */
      e.preventDefault();
      if (!newItem) return;
      addItem(newItem);
      setNewItem('')
  }

  return (
    <div className="9_App">
      <Header title='grocery list'/>
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Content
        items = {items.filter((item) => ((item['item']).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;