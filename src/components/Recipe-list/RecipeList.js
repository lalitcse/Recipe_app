import React, { Component } from 'react';
import './RecipeList.css';
import axios from 'axios'
import Loader from '../loader/Loader';
import { Link } from 'react-router-dom'

class RecipeList extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading : true ,
            errormsg : '',
            recipe : []
        }
    }

    componentDidMount(){
        axios.get('http://starlord.hackerearth.com/recipe')
            .then(response => {
                this.setState({recipe: response.data})
                this.setState({loading: false})
            })
            .catch(error => {
                console.log(error)
                this.setState({errormsg: 'Error while retreiving data !'})
            })
    }

render(){
    const { recipe , errormsg} = this.state
  return (
        <div className="recipe_card">
            <div className="recipe_card_inner">
                {
                    this.state.loading || !recipe.length 
                    ? 

                    <div className='loader_section'><Loader /></div>
                        
                    : 
                    recipe.map(recipedata => 
                        <div key={recipedata.id} className="card  main_key_card">
                            <span className="card_category"><label>{recipedata.category}</label></span>
                            <div className="full_f_image">
                                <div>
                                    <img className="food_image" src={recipedata.image} />
                                </div>
                                <div className="detail_outer_div">
                                    <div className="only_info_section">
                                        <p className="food_name">{recipedata.name}</p>
                                        <div>
                                            <label className="food_price" >{recipedata.price} $</label>
                                                <label className="food_label">{recipedata.label}</label>
                                            <label className="food_detail_btn"><Link style={{color:'black'}} to={`/recipe/${recipedata.id}`}>View Details</Link></label>
                                        </div>
                                        <div>
                                            <p className="card_description">{recipedata.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>) 
                }
                { errormsg ? <div className='error_msg'>{errormsg}</div> :null}
            </div>
        </div>
        );
    }
}

export default RecipeList;