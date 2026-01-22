import Nav from './components/Nav'
import Footer from './components/Footer';
import React, { useState, useEffect } from "react" 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BooksInfo from './pages/Bookinfo';
import Cart from './pages/Cart';


function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
    }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if(item.id === book.id) {
        return {
          ...item,
          quantity: +quantity,
        }
      }
      else {
        return item
      }
    }))
  } 

  function removeItem (item) {
    setCart(cart.filter(book => book.id !== item.id))
  }
  
  function numberOfItems () {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity
    }) 
    return counter
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
    <div className="App">
      <Route />
      <Nav numberOfItems={numberOfItems()} />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books}/>} />
      <Route path="/books/:id" render={() => <BooksInfo books={books} addToCart={addToCart} cart={cart} />} /> 
      <Route path="/cart" render={() => <Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
      </Switch>
      <Footer />      
    </div>
    </Router>
  );
}

export default App;
