import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchUsers} from '../actions/index'

class UserIndex extends Component{

  componentDidMount(){
      this.props.fetchUsers();

    }

    render()
     {
       console.log("User:",this.props.users);
       return(
         <h1>List of Users</h1>
       )
     }
}


function mapStateToProps(state)
{
    console.log("state",state);
return{
  users:state.users
};

}

export default connect(mapStateToProps,{fetchUsers}) (UserIndex);
