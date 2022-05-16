import React from 'react'
import CountryComponent from '../components/CountryComponent'
import '../App.css'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            countries : props.countries
        }
    }
    render(){
        return (
            <div>
                <h1>Most Polpulated</h1>
                <div>
                    <CountryComponent 
                    det='population' 
                    onDetailsClick={this.props.onDetailsClick} countries={[...this.state.countries]
                        .sort((a,b) => b.details.population - a.details.population)
                        .slice(0,3)}/> 
                </div>
                <h1>Most Largest</h1>
                <div>
                    <CountryComponent 
                    det='area' 
                    onDetailsClick={this.props.onDetailsClick} countries={[...this.state.countries]
                        .sort((a,b) => b.details.area - a.details.area)
                        .slice(0,3)}/>    
                </div>
            </div>
        )
    }

}

export default Home
