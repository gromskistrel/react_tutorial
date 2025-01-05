import '.'
import Header from './3_Header'
import Content from './3_Content'
import Footer from './3_Footer'

function App() {
  const handleNameChange = () => {
    const names = ['bob', 'Kevin', 'Žiga'];
    const int = Math.floor(Math.random()*3)
    return names[int]
  }

  const name = "Dave";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see changes.
        </p>
          <p>Hello {handleNameChange()}</p>
      </header>
    </div>
  );
}

export default App;
