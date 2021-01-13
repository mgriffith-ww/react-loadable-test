import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink }  from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';

class Fetch extends React.Component {
    constructor() {
      super();
  
      this.state = {
        isLoaded: false,
        pokemons: [],
      };
      this.styles = {
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop:50,
        marginLeft:50,
        listStyleType: 'none'   
        
      };
  
    }
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
          .then(response => response.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              pokemons: result.results
            })
        })
      }
      render() {
        const { pokemons } = this.state;
        return (
            <>
            <section style={this.styles}>
                    <h1>Example of a component doing a fetch to an external API</h1>
                </section>
            <section>
                <NavLink
                    exact={true}  to='/'><Button style={this.styles} variant="outline-primary">Back</Button></NavLink>
                </section>
            <ul style={this.styles}>
              {pokemons.map(pokemon =>
                <li>
                  <p>{pokemon.name}</p>
                </li>
              )}
            </ul>
            </>
          );
    }
  }
  export default Fetch;