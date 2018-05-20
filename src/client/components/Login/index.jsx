import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '../Form';
import styles from './styles.css';

class Login extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    loggedIn: PropTypes.bool.isRequired,
    logIn: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    error: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  onEmailChange = (e) => {
    this.setState({
      username: e.target.value,
      error: false,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.username) {
      this.setState({ error: true });
      return;
    }

    this.props.logIn(this.state.username);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <form onSubmit={this.onSubmit} className={styles.form}>
          <h1>Log In</h1>

          <Input
            label="Username"
            onChange={this.onEmailChange}
            error={this.state.error}
          />

          <Button onClick={this.onSubmit}>Continue</Button>
        </form>
      </div>
    );
  }
}

export default Login;
