import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'react-bootstrap';
import { NavLink }  from 'react-router-dom';
class Table extends React.Component {

    render(){
        const allExperiments= [
            {
                "experimentId": 13,
                "experimentName": "exp809",
                "experimentDescription": "desc",
                "experimentTextId": "expUnn1090",
                "isEnabled": true,
                "ownerId": 1,
                "appId": 1,
                "status": 1,
                "createTime": "2021-01-07T08:41:26.953Z",
                "updateTime": "2021-01-07T08:41:26.953Z",
                "environment": 0,
                "variations": []
            },
            {
                "experimentId": 83,
                "experimentName": "101",
                "experimentDescription": "desc",
                "experimentTextId": "expUnn1090",
                "isEnabled": true,
                "ownerId": 1,
                "appId": 1,
                "status": 1,
                "createTime": "2021-01-07T08:41:26.953Z",
                "updateTime": "2021-01-07T08:41:26.953Z",
                "environment": 0,
                "variations": []
            },
            {
                "experimentId": 75,
                "experimentName": "102",
                "experimentDescription": "desc",
                "experimentTextId": "expUnn1090",
                "isEnabled": true,
                "ownerId": 1,
                "appId": 1,
                "status": 1,
                "createTime": "2021-01-07T08:41:26.953Z",
                "updateTime": "2021-01-07T08:41:26.953Z",
                "environment": 0,
                "variations": []
            },
            {
                "experimentId": 73,
                "experimentName": "103",
                "experimentDescription": "desc",
                "experimentTextId": "expUnn1090",
                "isEnabled": true,
                "ownerId": 1,
                "appId": 1,
                "status": 1,
                "createTime": "2021-01-07T08:41:26.953Z",
                "updateTime": "2021-01-07T08:41:26.953Z",
                "environment": 0,
                "variations": []
            },
            {
                "experimentId": 74,
                "experimentName": "104",
                "experimentDescription": "desc",
                "experimentTextId": "expUnn1090",
                "isEnabled": true,
                "ownerId": 1,
                "appId": 1,
                "status": 1,
                "createTime": "2021-01-07T08:41:26.953Z",
                "updateTime": "2021-01-07T08:41:26.953Z",
                "environment": 0,
                "variations": []
            },
        ]
        const columns =[
            {dataField:"experimentName",
                text:"Name",
                headerAttrs: { width: 200 },
                sort: true 
            },
            {dataField:"ownerId",
                text:"Team",
                headerAttrs: { width: 150 },
                attrs: { width: 150 },
                sort: true,
            },
            {dataField:"status",
                text:"Status",
                headerAttrs: { width: 150 },
                attrs: { width: 150 },
            },
            {dataField:"environment",
                text:"Environments",
                headerAttrs: { width: 200 },
                attrs: { width: 200 },
            },
            {dataField:"updateTime",
                text:"Last Modified",
                headerAttrs: { width: 200 },
                attrs: { width: 200 },
            },
            {dataField:"createTime",
                text:"Created",
                headerAttrs: { width: 200 },
                attrs: { width: 200, className: "EditRow" } ,
            },
            {dataField: "edit", 
                text: "",
                sort: false,
                headerAttrs: { width: 150 },
                attrs: { width: 150, className: "EditRow" } 
              }
        ]
        return(
            <section>
                <BootstrapTable
							keyField="experimentId"
							data={ allExperiments }
							columns={ columns }
							bordered={ false }
							/>
                <section>
                <NavLink 
                    exact={true}  to='/'><Button variant="outline-primary">Back</Button></NavLink>
                </section>

            </section>


        )
    }
}
export default Table;