import React from "react";
import { connect } from "react-redux";
import { onSearchFilter } from "../redux/currency-actions";
import { getFilter } from "../redux/currency-selectors";

const SearchForm = ({ onSearchHandler, filter }) => {
  return (
    <label className="searchFormLabel">
      Find currency by name
      <input
        className="searchField"
        type="text"
        name="name"
        placeholder="enter currency"
        value={filter}
        onChange={onSearchHandler}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSearchHandler: (e) => dispatch(onSearchFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
