import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink }  from 'react-router-dom';

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {},
            redirect: false,
        }
    this.owner = [
        {name:"ownerId",label: "Choose Team", value:"6",disabled:true},
        {name:"ownerId",label: "Growth", value: "1"},
        {name:"ownerId",label: "Search", value: "2"},
        {name:"ownerId",label: "IAP", value: "3"},
        {name:"ownerId",label: "Connect", value: "4"},
        {name:"ownerId",label: "App", value: "5"},
    ];
    }

    render(){
        return(
            <section>
                <h1>This is an About Loader</h1>
                    <Button variant="outline-primary"><NavLink 
                    exact={true}  to='/'>Back</NavLink></Button>
            </section>
        )
    }
}
export default About;
