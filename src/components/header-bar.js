import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './header-bar.css';
import { Link } from 'react-router-dom';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout-button" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <header className="header-bar">
                <h1>Traffic's Cool</h1>
                {logOutButton}
<<<<<<< HEAD
                <Link style={{textDecoration: 'none'}}
                to="/progress">     <button className="logout-button" >Progress</button></Link>
            </div>
=======
            </header>
>>>>>>> 212df45338314560f3e8a6fa48534495eea7fa32
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    authToken: state.auth.authToken,
});

export default connect(mapStateToProps)(HeaderBar);
