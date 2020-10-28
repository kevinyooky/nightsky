import React from "react";
import {Field, reduxForm} from "redux-form"

class SearchBar extends React.Component {

  renderInput=props=>{
    return(
    <div>
      <label>Search</label>
      <input onChange={props.input.onChange} value={props.input.value} autoComplete="off"/>
    </div>
    )}

  onFormSubmit = (formValues) => {
    this.props.onTermSubmit(formValues.searchTerm);
      };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light ">
        <div className="ui container">
          <div className="navbar-nav ">
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="form-inline ">
              <Field name='searchTerm' component={this.renderInput} label="Search"/>
              <button className="btn btn-outline-success">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default reduxForm({
  form: "searchBar"
})(SearchBar);
