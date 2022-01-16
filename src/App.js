
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React,{useState} from 'react';
import Footer from './components/Footer.js'
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
      price: 100000,
      name: "Macbook",
      quantity:0,
    },
    {
      price:18000,
      name: "Airpods",
      quantity:0,
    }
  ]
  const [productList, setProductList] = useState(products)
  const [totalAmount, settotalAmount] = useState(0)

  const incrementQuantity = (index) => {
    let newProductList =[...productList]
    let newtotalAmount =totalAmount
    newProductList[index].quantity++
    newtotalAmount += newProductList[index].price;
    settotalAmount(newtotalAmount)
    setProductList(newProductList);
  }
  const decrementQuantity = (index) => {
    let newProductList =[...productList]
    let newtotalAmount =totalAmount

    if (newProductList[index].quantity > 0)
    {
       newProductList[index].quantity--;
       newtotalAmount -= newProductList[index].price;
    }
    settotalAmount(newtotalAmount)
    setProductList(newProductList);
  }
  const resetQuantity = () =>{
    let newProductList =[...productList];
    newProductList.map((products)=>{
      products.quantity=0
    })
    setProductList(newProductList);
    settotalAmount(0);     
  }
  const removeItem = (index) => {
    let newProductList =[...productList];
    let newtotalAmount =totalAmount;
    newtotalAmount -= newProductList[index].quantity* newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);   
    settotalAmount(newtotalAmount);
  }
  const addItem = (name,price) => {
    let newProductList =[...productList];
      newProductList.push({
        price:price,
        name:name,
        quantity:0
      })
    setProductList(newProductList);   
      
  }
  return (
    <>
    <Navbar/>
    <main className='container mt-5 '>
    <AddItem addItem={addItem}/>
    <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
