import React from 'react';
import { Link ,useParams } from 'react-router-dom'
import './RecipeDetail.css';
import Tile from '../../assets/images/detail_tile.svg'
import CircleTile from '../../assets/images/circle.svg'
import Fav from '../../assets/images/fav.svg'
import Back from '../../assets/images/back.svg'

function RecipeDetail(props) {
    const { id } = useParams()
  return (
            <div>
                <div><Link to='/' className="go_back"><img className="circle" src={Back} alt="" />Go Back</Link></div>
                <div className="vrow_for_video">
                    <div className="video_block">
                        <img className="v_img" src={Tile} alt="" />
                    </div>
                    <div className="des_video">
                            
                            <h1 className="c_padding category_below_text">{id} </h1>
                            <div className="all_sec">
                                <label className="food_price" >4.99 $</label>
                            </div>
                            <p className="c_padding cdes_text">DESCRIPTION</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe non id repellendus aut quasi. Quos odio hic dolore architecto molestiae ad inventore, ullam, corrupti fugiat error nemo ipsam accusantium et odit deserunt quisquam! Vero totam amet reprehenderit saepe, a quos?</p>
                    </div>
                </div>
                <div className="full_detail_sec">
                    <div className="full_inner_sec">
                        <p className="c_padding det_text_inner">Ingredients :</p>
                        <p className="ing_pa">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quasi saepe placeat voluptates quibusdam ex! Nihil qui quibusdam quas ipsam iure, minima beatae ut optio? Molestias explicabo amet ipsam tempore illo. Officia at vero similique animi reiciendis nesciunt placeat cum delectus asperiores vel sit expedita sunt voluptate debitis deleniti iusto, magni nobis veritatis nostrum in porro qui eveniet! Perspiciatis, soluta.</p>

                        <p className="c_padding det_text_inner" style={{marginTop:'40px'}}>How to prepare :</p>
                        <p className="ing_pa">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quasi saepe placeat voluptates quibusdam ex! Nihil qui quibusdam quas ipsam iure, minima beatae ut optio? Molestias explicabo amet ipsam tempore illo. Officia at vero similique animi reiciendis nesciunt placeat cum delectus asperiores vel sit expedita sunt voluptate debitis deleniti iusto, magni nobis veritatis nostrum in porro qui eveniet! Perspiciatis, soluta.</p>
                    </div>
                    <div className="comment_sec">
                        <div style={{textAlign: 'center', marginBottom: '30px'}}>
                            <img className="circle" src={CircleTile} alt="" />
                        </div>
                        <div style={{textAlign: 'center', marginBottom: '30px'}}>
                            <img className="fav" src={Fav} alt="" />
                        </div>
                        <hr style={{marginBottom: '30px'}} />
                        <textarea className="detail_text_input" placeholder="Type something here..."></textarea>
                        <button className="text_btn">ADD COMMENT</button>
                    </div>
                </div>
                <div className="last_tag">
                    <p>YOUR FOOD TASTES YUMMY</p>
                </div>
            </div>
        );
}

export default RecipeDetail;