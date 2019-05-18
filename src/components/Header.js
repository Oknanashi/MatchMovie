import React from 'react'
import styled from 'styled-components'
import logo from './../logo.png'
import {
    BrowserRouter as Router,
    Link,Switch,Route,NavLink
} from 'react-router-dom';
import TwoActors from './twoActors'
import TwoMovies from './twoMovies'

const NavBar = styled.header`
    display:flex;
    justify-content:space-around;
    align-items:center;
    a{
        text-decoration:none;
        }
    ul{
        list-style-type:none;
    }
    a{  
        font-size:1.2rem;
        :hover{
            background-color:#eee;
        }
        color:black;    
    }

`

export default class Header extends React.Component{


    render(){
        return(

                <NavBar>
                    <div className='logo'>
                        <NavLink exact to='/' >
                            <img src={logo}  alt="logo"/>
                        </NavLink>
                    </div>

                        <NavLink exact to='/' activeClassName='activeLink'>
                            Two People in the Same Title
                        </NavLink>
                        <NavLink to='/twoMovies/' activeClassName='activeLink'>
                            Two Titles with the Same People
                        </NavLink>

                </NavBar>


        )
    }
}
