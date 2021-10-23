import React, { Component } from "react";
import { SearchFormStyled } from "./SearchFormStyled";
// import { connect } from "react-redux";
// import { onSearchFilter } from "../redux/currency-actions";
// import { getFilter } from "../redux/currency-selectors";

// const SearchForm = ({ onSearchHandler, filter }) => {

class SearchForm extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.reset();
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.query);
    // this.props.onSubmit(this.state.query);
    this.reset();
  };
  reset = () => {
    this.setState({ query: "" });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <h1>All currencies list</h1>

        <label className="searchFormLabel">
          <input
            className="SearchField"
            type="text"
            name="name"
            placeholder="search by name"
            onChange={this.handleChange}
            value={this.state.query}
            // value={filter}
            // onChange={onSearchHandler}
          />
        </label>
      </SearchFormStyled>
    );
  }
}

export default SearchForm;

// const mapStateToProps = (state) => ({
//   filter: getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSearchHandler: (e) => dispatch(onSearchFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
