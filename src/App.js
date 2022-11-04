import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import NotFound from './components/NotFound/NotFound';
import Shops from './components/Shops/Shops';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path='/shops' element={<Shops></Shops>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
