import { Routes, Route, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import Header from './ui/header/Header';
import ItemList from './ui/body/ItemList'
import { fetchItemList } from './redux/Slices/itemListSlice';
import './App.css';
import Toast from './ui/body/Toast';
import About from './ui/body/About';
import CartList from './ui/body/CartList';


function App() {
  const [toastMessage, setToastMessage] = useState('');
  const itemList = useSelector(state => state.itemList.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);


  function showToastMessage(message) {
    setToastMessage(message);
    toast.current.style.display = 'flex';
    setTimeout(() => {
      toast.current.style.display = 'none';
    }, 1000);
  }

  useEffect(() => {
    navigate('/home');
    dispatch(fetchItemList());
  }, [dispatch]);

  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemList itemList={itemList} showToastMessage={showToastMessage}/>}/>
          <Route path='/home' element={<ItemList itemList={itemList} showToastMessage={showToastMessage}/>}/>
          <Route path='/cart' element={<CartList showToastMessage={showToastMessage}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<h1>Error</h1>}/>
        </Routes>
        <Toast message={toastMessage} ref={toast}/>
      </div>
    </>
  );
}

export default App;
