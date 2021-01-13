import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink }  from 'react-router-dom';

class Home extends React.Component {


    render(){
        const styles = {
            fontFamily: "sans-serif",
            textAlign: "center",
            marginTop:50,
            marginLeft:50
            
          };
        return(
            <section>
                <section style={styles}>
                    <Button variant="outline-primary"><NavLink to="/about">About Us</NavLink></Button>
                </section>
                <section style={styles}>
                    <Button variant="outline-primary"><NavLink to="/info">Information</NavLink></Button>
                </section>
            </section>
        )
    }
}
export default Home;
