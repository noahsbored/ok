import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'john' };
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({ name: 'noach' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;
