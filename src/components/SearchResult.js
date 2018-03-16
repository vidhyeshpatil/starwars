import React, { Component } from 'react';
import SearchList from './SearchList';
import SearchInfo from './SearchInfo';

// displays the Search Results
export default class SearchResult extends Component {
  
  render() {
    return (
	  <div>
		{(!this.props.displayData) 
			? <SearchList searchResult = {this.props.searchResult} onPlanetClick = {this.props.onPlanetClick} /> 
			: <SearchInfo planetData = {this.props.planetData} />
		}
	  </div>
    );
  }
}
