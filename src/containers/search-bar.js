import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return(
      <div className="form-group">
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            className="form-control"
            placeholder="Get 5day forecast"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
      </form>
      </div>
    );
  }
}
