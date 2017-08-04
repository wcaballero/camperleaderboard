import React, {Component} from 'react';
import axios from 'axios';



const ROOT_URL = `https://fcctop100.herokuapp.com/api/fccusers/top/alltime`;

export default class RecentPosts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.renderList = this.renderList.bind(this);
  }

  //fetch datas from network request
  fetchUsers() {

    // request is a promise and .then inteprets the promise and stores in a var called data
    axios.get(ROOT_URL)
      .then(({data}) => {
        this.setState({users: data});
      });
      return this.renderList();
  }

  // // outputs data to table (view)
  renderList() {
    return this.state.users.map((user, index) => {
      return (
        <tr key={user.username}>
          <td className="text-xs-left">{index + 1}</td>
          <td className="text-xs-left"><img className="img-responsive img-thumbnail" src={user.img} alt={`img of ${user.username} user`} /><a href={`https://www.freecodecamp.com/${user.username}`} >{user.username}</a></td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <tbody id="recentPoints" className="table-bordered">
        {this.fetchUsers()}
      </tbody>
    );

  }
}
