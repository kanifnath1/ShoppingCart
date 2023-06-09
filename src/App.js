import './App.css';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import './components/style.css';

function App() {
  return (
    <div className="App">

      <Header/>

      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
