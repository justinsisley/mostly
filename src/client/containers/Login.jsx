import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../store/session';
import Login from '../components/Login';

const mapStateToProps = state => ({
  ...state.session,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...sessionActions,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
