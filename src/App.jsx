import './App.css';
import CourseList from './Components/CourseList';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import { calculateTotal } from './Control/CardSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function App() {

  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }
    , [cartItems, dispatch]);

  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
