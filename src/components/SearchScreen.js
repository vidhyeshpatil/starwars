import React, { Component } from 'react';
import SearchResult from './SearchResult';
import { withRouter } from 'react-router-dom';

class SearchScreen extends Component {
  
  constructor() {
	super();
	//
	this.state = {
		data: [],
		searchVal : '',
		searchResult : '',
		displayResult: false,
		planetData : '',
		displayData: false
	}
  }
  
  componentWillMount() {
	let url = "https://swapi.co/api/planets/";
	
	this.getAPICall(url);
  }
  
  // API Call to get response of Planets
  getAPICall = (url) => {
	fetch(url)
		.then(res => res.json())
		.then(res => {
			this.setState({data: res.results})
		})
		.catch((error) => {
			alert(error);
		});
  }
  
  // Search Operations on basis of input value
  searchResults = (e) => {
	let planets = this.state.data, searchQuery = e.target.value.toLowerCase();
	
	let result = planets.filter((currElem) => {
					let val = currElem.name.toLowerCase();
					//
					if(currElem.population === "unknown") {
						currElem.population = "0";
					}
					//
					return val.indexOf(searchQuery) !== -1;
				});
	
	this.setState({
		searchResult : result,
		searchVal: e.target.value,
		displayResult: (result.length && searchQuery !== '') ? true : false,
		displayData: false
	});
  }
  
  // update respective planet information
  onPlanetClick = (currData) => {
	this.setState({
		planetData: currData,
		searchVal: currData.name,
		displayData: true
	});
  }
  
  // moves to default screen
  onLogOut = () => {
	this.props.history.push('/');
  }
  
  render() {  
    return (
		<div>
		  <div className = "wrapper">
			<div className = "heading"> STAR WARS </div>
			<div className = "btnWrap">
				<button className="logoutBtn" onClick = {() => this.onLogOut()}> LogOut </button>
			</div>
			<input className = "inputSearch" type = "text" value = {this.state.searchVal} placeholder = "Planets Search" onChange = {this.searchResults} />
			{this.state.displayResult && <SearchResult searchResult = {this.state.searchResult} planetData = {this.state.planetData} displayData = {this.state.displayData} onPlanetClick = {this.onPlanetClick} />}
		  </div>
		</div>
    );
  }
}

export default withRouter(SearchScreen);