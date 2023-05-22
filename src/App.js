import {Component} from 'react'

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import FoodHabits from './components/FoodHabits'
import Exercise from './components/Exercise'
import HealthProblems from './components/HealthProblems'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/foodhabits" component={FoodHabits} />
          <Route exact path="/exercise" component={Exercise} />
          <Route exact path="/healthproblems" component={HealthProblems} />
          <Route path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
