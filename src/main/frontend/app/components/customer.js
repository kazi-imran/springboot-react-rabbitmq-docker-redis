import _ from "lodash";
import React, {Component} from "react";
import {Panel, PageHeader, Table, Button, Glyphicon} from "react-bootstrap";
import {Link} from 'react-router-dom';

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this
      .handleDelete
      .bind(this);
    this.renderImage = this
      .renderImage
      .bind(this);

  }

  handleDelete()
  {
    this
      .props
      .onDelete(this.props.customer);
  }

  renderImage(customer) {
    return (
      <div className="text-center">
        <figure>
          <img src={customer.thumbnail} alt="Image thumbnail" className="img-thumbnail"></img>
          <figcaption className="text-center"></figcaption>
        </figure>
      </div>
    );

  }
  render() {

    console.log("props inside Customer ", this.props);

    return (

      <tr key={this.props.customer.email}>

        <td>{this.props.customer.id}</td>
        <td>
          <Link className="btn btn-link" to={`customers/${this.props.customer.id}`}>{this.props.customer.firstName} {this.props.customer.lastName}</Link>
        </td>
        <td>{this.props.customer.email}</td>
        <td className="text-center" style={{
          align: 'center-block'
        }}>
          <Button onClick={this.handleDelete}><Glyphicon glyph="remove"/></Button>
        </td>
        
        <td>
       
           {<div className="text-center">
            <figure>
            <img
          src={this.props.customer.thumbnail}
          alt="Image thumbnail"
          className="img-thumbnail"></img>
              <figcaption className="text-center"></figcaption>
            </figure>
          </div> 
        }
        </td>

      </tr>

    );

  }
}
export default Customer;
