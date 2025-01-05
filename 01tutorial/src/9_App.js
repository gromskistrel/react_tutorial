import '.'
import Header from './8_Header'
import AddItem from './9_AddItem'
import Content from './8_Content';
import Footer from './8_Footer'
import SearchItem from './9_SearchItem'
import {useState} from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  
  const [newItem, setNewItem] = useState ('')
  const [search, setSearch] = useState ('')


  const setAndSaveItems = (newItems) => {
      setItems(newItems);
      localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const addItem = (item) => {
      // one way (not to my liking)
      //const id = items.length ? items[item.length-1] : 1
      // this will work even if ids are not in order
      const id = items.length ? items.reduce((max, item) => (item.id > max ? item.id : max), 0)+1 : 1;
      const myNewItem = {id, checked: false, item};
      const listItems = [...items, myNewItem]
      setAndSaveItems(listItems)
  }

  const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
        setAndSaveItems(listItems)
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setAndSaveItems(listItems)
    }

    const handleSubmit = (e) => {
      /* This is so that the page doesn't reload */
      e.preventDefault();
      if (!newItem) return;
      addItem(newItem);
      setNewItem('')
  }

  return (
    <div className="App">
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