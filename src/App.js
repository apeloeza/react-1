import React from 'react'
import Countries from './models/Countries'
import Home from './pages/Home'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      page : "home",
      countries : Countries,
      pageHistory: [],
      pageDetailsHistory: [],
    }
  }

  render() { 
    return (
      <div className='App'>
        <h1>Fun Fact About Countries</h1>
        <div>
        </div>
        { 
          this.state.page === 'home' ? 
            <Home 
            onDetailsClick={this.handleClickDetails} 
            countries={this.state.countries} /> 
          : ''
        }
      </div>
      
    )
  }
}

export default App
