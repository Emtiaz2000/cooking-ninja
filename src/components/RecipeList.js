import React from 'react';
import {Link} from 'react-router-dom'

import './RecipeList.css'

export default function RecipeList({recipes}) {
  return (
      <div className='recipe-list'>
      { recipes.map(recipe=>{
              return(
                <div key={recipe.id} className="card">
                    <h2>{recipe.title}</h2>
                    <p>{recipe.cookingTime}</p>
                    <div>{recipe.method.substring(0,100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>View more</Link>               
                </div>
              )
          })
      }
   </div>
  );

}
