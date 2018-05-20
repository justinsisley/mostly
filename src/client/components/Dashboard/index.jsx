import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Form';
import styles from './styles.css';

function Dashboard(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.message}>
          Logged in as <strong>{props.username}</strong>
        </div>

        <Button onClick={props.logOut}>Log Out</Button>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  logOut: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Dashboard;
