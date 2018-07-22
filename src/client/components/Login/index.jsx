import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Input } from '../Form';
import styles from './styles.css';

class Login extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    error: false,
  };

  onEmailChange = (e) => {
    this.setState({
      username: e.target.value,
      error: false,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { logIn } = this.props;
    const { username } = this.state;

    if (!username) {
      this.setState({ error: true });
      return;
    }

    logIn(username);
  };

  render() {
    const { loggedIn } = this.props;
    const { error } = this.state;

    if (loggedIn) return <Redirect to="/dashboard" />;

    return (
      <div className={styles.wrapper}>
        <form onSubmit={this.onSubmit} className={styles.form}>
          <h1>
            Log In
          </h1>

          <Input
            label="Username"
            onChange={this.onEmailChange}
            error={error}
          />

          <Button onClick={this.onSubmit}>
            Continue
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
