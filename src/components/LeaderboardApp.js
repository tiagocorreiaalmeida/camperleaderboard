import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Users from "./Users";
 
class LeaderboardApp extends React.Component {
  constructor(props) {
    super(props);
    this.sortByRecent = this.sortByRecent.bind(this);
    this.sortByAll = this.sortByAll.bind(this);
    this.state = {
      topLastDays: [],
      topAlltime: [],
      filter: 0
    }
  }

  componentDidMount() {
    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then((response) => {
        this.setState(() => ({ topLastDays: response.data }));
      }).catch((e) => { console.log(e); });

    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then((response) => {
        this.setState(() => ({ topAlltime: response.data }));
      }).catch((e) => { console.log(e); });
  }

  sortByRecent() {
    if (this.state.filter !== 0) {
      this.setState(() => ({ filter: 0 }));
    }
  }

  sortByAll() {
    if (this.state.filter !== 1) {
      this.setState(() => ({ filter: 1 }));
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="title"><i className="title__icon fa fa-free-code-camp" aria-hidden="true"></i>freecodeCamp Camper Leaderboard</h1>
        <table className="table">
          <thead>
            <tr className="table__head">
              <th className="table__head__header"><i className="fa fa-line-chart" aria-hidden="true"></i> Position</th>
              <th className="table__head__header"><i className="fa fa-user" aria-hidden="true"></i> Username</th>
              <th className="table__head__header table__head__header-sort" onClick={this.sortByRecent}>Points in past  30 days {this.state.filter === 0 && <i className="fa fa-arrow-down" aria-hidden="true"></i>}</th>
              <th className="table__head__header table__head__header-sort" onClick={this.sortByAll}>All time points {this.state.filter === 1 && <i className="fa fa-arrow-down" aria-hidden="true"></i>}</th>
            </tr>
          </thead>
          <Users
            userList={this.state.filter > 0 ? this.state.topAlltime : this.state.topLastDays}
          />
        </table>
      </div>)
  }

}

export default LeaderboardApp;





