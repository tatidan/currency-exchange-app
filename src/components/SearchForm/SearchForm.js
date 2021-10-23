import React, { Component } from "react";
import { SearchFormStyled } from "./SearchFormStyled";
import sprite from "../../icons/sprite.svg";
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

    //  this.props.contacts.find(
    //    (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase()
    //  )
    //    ? alert(`Contact with the name ${this.state.name} already exists.`)
    //    : this.props.addNewContact({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ query: "" });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <h1>{this.props.title}</h1>

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
          <svg className="Currency__IconBox" width="15px" height="15px">
            <use
              className="Currency__Icon"
              href={sprite + "#icon-search"}
            ></use>
          </svg>
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
