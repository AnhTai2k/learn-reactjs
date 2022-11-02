import './App.css';
//import ColorBox from './components/ColorBox';
//import Counter from './components/Counter';
//import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { useEffect } from 'react';
import productApi from './api/productApi';
//import { Button } from '@material-ui/core';
//import { useSnackbar } from 'notistack';


function App() {
  useEffect(() =>{
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    }

    fetchProducts();
  }, []);

  

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
