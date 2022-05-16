import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'


class CountryComponent extends React.Component {
    constructor(props){
        super(props)
        this.countries = [...props.countries]
        this.det = props.det

        this.handleClickCountry = this.handleClickCountry.bind(this)
    }

    handleClickCountry = (e) => {
        this.props.onDetailsClick(e)
    }

    render() {
        return (
            <div >
                {
                    this.det === 'capital' ? 
                    this.countries.map((country) =>
                        <Card2 
                        onclick={(e) => this.handleClickCountry(country.name, e)} 
                        key={country.name} 
                        det={this.det} 
                        country={country} />
                    ) 
                    : this.countries.map((country) =>
                        <Card1 
                        onclick={(e) => this.handleClickCountry(country.name, e)} 
                        key={country.name} 
                        det={this.det} 
                        country={country} />
                    )
                }
            </div>
        )
    }
}

export default CountryComponent
