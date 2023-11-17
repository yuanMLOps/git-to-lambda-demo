import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {
  return (
    <section className="App">
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
    </section>
  );
}

export default App;
