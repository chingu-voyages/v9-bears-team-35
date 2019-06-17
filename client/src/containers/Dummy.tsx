import { connect } from 'react-redux';
import Dummy from '../components/Dummy';
import { Store } from '../types';

const mapStateToProps = (state: Store) => {
  return {
    ...state.filterOptions,
  };
};

export default connect(
  mapStateToProps,
  null
)(Dummy);
