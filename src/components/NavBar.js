import React from 'react';
import {Link} from 'react-router-dom'
import {useTheme} from '../hooks/useTheme'


//style
import './navbar.css'

export default function NavBar() {
    const {color} = useTheme()

    return(
     <div className='navbar' style={{background:color}}>
        <nav>
            <Link to='/' className='brand'>
                <h2>Coking Ninja</h2>
            </Link>
            
            <Link to='/create'>
                Create Recipes
            </Link>
            

        </nav>


    </div>);
}
