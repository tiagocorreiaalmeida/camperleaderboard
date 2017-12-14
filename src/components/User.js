import React from "react";
import ReactDOM from "react-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr className="table__row">
        <td className="table__row__item">{this.props.position}</td>
        <td className="table__row__item">
          <a className="table__row__item__link"
            href={"https://github.com/" + this.props.name}
            target="_blank">
            <img className="table__row__item__img" src={this.props.img} alt={this.props.name + " image"} />
            {this.props.name}
          </a>
        </td>
        <td className="table__row__item">{this.props.recent}</td>
        <td className="table__row__item">{this.props.allTime}</td>
      </tr>
    )
  }
}

export default User;