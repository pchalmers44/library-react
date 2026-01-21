import Nav from './components/Nav'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BooksInfo from './pages/Bookinfo';


function App() {
  return (
    <Router>
    <div className="App">
      <Route />
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books}/>} />
      <Route path="/books/:id" render={() => <BooksInfo books={books}/>} /> 
      </Switch>
      <Footer />      
    </div>
    </Router>
  );
}

export default App;
