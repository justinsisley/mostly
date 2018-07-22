import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Form';
import styles from './styles.css';

function Dashboard({ username, logOut }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1>
          Dashboard
        </h1>

        <div className={styles.message}>
          Logged in as
          {' '}
          <strong>
            {username}
          </strong>
        </div>

        <Button onClick={logOut}>
          Log Out
        </Button>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  logOut: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Dashboard;
