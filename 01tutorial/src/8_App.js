import '.'
import Header from './8_Header'
import AddItem from './9_AddItem'
import Content from './8_Content';
import Footer from './8_Footer'
import {useState} from 'react';

function App() {
  // this looks disgusting, but the issue is that stuff from content is needed for footer
  const [items, setItems] = useState([
          {
              id: 1,
              checked: true,
              item: "One half pound bag of Cocoa Covered Almonds Unsalted"
          },
          {
              id: 2,
              checked: false,
              item: "Item 2"
          },
          {
              id: 3,
              checked: false,
              item: "Item 3"
          }
      ]);

  const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItmes = items.filter((item) => item.id !== id)
        setItems(listItmes)
        localStorage.setItem('shoppinglist', JSON.stringify(listItmes))
    }

  return (
    <div className="App">
      <Header title='grocery list'/>
      <AddItem 
        items = {items}
        setItems = {setItems}

      />
      <Content
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;