import '.'
import Header from './8_Header'
import AddItem from './9_AddItem'
import Content from './13_Content';
import Footer from './8_Footer'
import SearchItem from './9_SearchItem'
import {useState, useEffect} from 'react';

function App() {
  const API_URL = 'http://localhost:3500/items'
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState ('');
  const [search, setSearch] = useState ('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect itself cannot be an async function  
  useEffect(() => {
    const fetchItems = async() => {
      try {
        // default is a GET request
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json();
        // console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        // console.log(err.stack); this doesn't seem to be working
        setFetchError(err.message);
      } finally {
        setIsLoading(false)
      }
    }
    // This is to simulate the waiting for data
    setTimeout(() => {
      fetchItems()
    }, 2000)
    // (async () => fetchItems())() no need for this, since there is no return in the async function
    // fetchItems()
  }, [])


  const addItem = (item) => {
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
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color: "red"}}>{`Error ${fetchError}`}</p>}
        {/* This is a weird syntax to me with && */}
        {!fetchError && !isLoading && <Content
          items = {items.filter((item) => ((item['item']).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;