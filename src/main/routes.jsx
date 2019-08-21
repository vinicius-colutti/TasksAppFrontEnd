import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props =>(
    <Router history={hashHistory} >
        <Route path='/todos' component={Todo}></Route>
        <Route path='/about' component={About}></Route>
        <Redirect from="*" to="/todos"></Redirect>
    </Router>
)