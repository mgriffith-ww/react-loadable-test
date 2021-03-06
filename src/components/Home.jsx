import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink }  from 'react-router-dom';

class Home extends React.Component {


    render(){
        const styles = {
            fontFamily: "sans-serif",
            textAlign: "center",
            marginTop:50,
            marginLeft:50,       
          };
        return(
            <section>
                <section style={styles}>
                    <h1>Welcome! This is a dummy app for code splitting with React-Loadable!</h1>
                </section>
                <section style={styles}>
                <NavLink to="/about"><Button variant="outline-primary">Basic Example</Button></NavLink>
                </section>
                <section style={styles}>
                <NavLink to="/info"><Button variant="outline-primary">Table Example</Button></NavLink>
                </section>
                <section style={styles}>
                <NavLink to="/fetch"><Button variant="outline-primary">Fetch Example</Button></NavLink>
                </section>
                
            </section>
        )
    }
}
export default Home;
