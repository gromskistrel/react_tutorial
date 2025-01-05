import '.'
import Header from './4_Header'
import Content from './7_Content';
import Footer from './3_Footer'

function App() {

  const name = "Dave";
  return (
    <div className="App">


      <Header/>
      <Content/>
      <Footer />
    </div>
  );
}

export default App;