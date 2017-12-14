import React from "react";
import ReactDOM from "react-dom";
import User from "./User";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tbody>
                {this.props.userList.map((ele, ind) => (
                    <User
                        position={ind + 1}
                        name={ele.username}
                        img={ele.img}
                        allTime={ele.alltime}
                        recent={ele.recent}
                        key ={ind + 1}  
                    />))}
            </tbody>
        )
    }
}

export default Users;