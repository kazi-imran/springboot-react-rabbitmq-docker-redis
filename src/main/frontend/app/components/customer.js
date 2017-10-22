import _ from "lodash";
import React, { Component } from "react";
import { Panel, PageHeader, Table, Button,Glyphicon} from "react-bootstrap";
import {Link} from 'react-router-dom';

class Customer extends React.Component {
  constructor(props) {
    super(props);
   // console.log("props called " , this.props);
  }

  render() {



    return (

      <tr key={this.props.customer.email}>
      {/* <a className="btn btn-link" href={this.props.customer._links.self.href}>{this.props.customer.firstName} {this.props.customer.lastName}</a> */}
      <td><Link className="btn btn-link" to={`customers/${this.props.customer.id}`}>{this.props.customer.firstName} {this.props.customer.lastName}</Link></td>
      <td>{this.props.customer.email}</td>
      <td className="text-center" style={{align:'center-block'}}>
      <Button><Glyphicon glyph="remove" /></Button>
      </td>
      
      </tr>
      
    );

}
}
export default Customer;
