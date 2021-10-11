import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import * as actions from '../../redux/Contact/contact-actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Find Contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(actions.filterByName(e.target.value))}
        autoComplete="off"
      ></input>
    </>
  );
}

// const mapStateToProps = state => ({
//   filter: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(actions.filterByName(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
