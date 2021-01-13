import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink }  from 'react-router-dom';

class About extends React.Component {

    render(){
        return(
            <section>
                <h1>This is an example loader for an About Us page</h1>
                <p>Here would be a mission statement example of this.</p>
                <p>Following would be some good images to showcase a mission statement</p>
                    <NavLink 
                    exact={true}  to='/'><Button variant="outline-primary">Back</Button></NavLink>
            </section>
        )
    }
}
export default About;
