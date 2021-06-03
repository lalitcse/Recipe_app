import React from 'react';
import RecipeList  from './components/Recipe-list/RecipeList'
import RecipeDetail  from './components/Recipe-detail/RecipeDetail'
import SearchIcon from './assets/images/recipe_search.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="big_outer">
        <div className="big_inner">
            <div className="search_bar_row">
                <div><span className="search_circle"> <img className="search_box" src={SearchIcon} /></span></div>
                <div className="input_div"><input className="input_box" type="text" placeholder="Search your favourite recipe..." /></div>
            </div>

            <div className="category_div">
                <p className="c_padding category_text">CATEGORY</p>
                <h1 className="c_padding category_below_text">Pizza & Noodles</h1>
            </div>
            <Router>
              <Switch>
                <Route exact path='/' component={RecipeList} />
                <Route exact path='/recipe/:id' component={RecipeDetail} />
              </Switch>
            </Router>
        </div>
    </div>
  );
}

export default App;
