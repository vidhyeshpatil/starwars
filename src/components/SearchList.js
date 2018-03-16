import React, { Component } from 'react';

export default class SearchList extends Component {
  
  setFontSize = (i) => {
	return (i !== 0) ? (16 + (i*2)) : 16;
  }
  
  render() {
    return (
		<div className = "resultWrapper">
			<ul className = "resultContainer">
				{this.props.searchResult.sort((a,b) => {
						return a.population - b.population;
					}).map((curr, i) => {
						let baseFontSize = this.setFontSize(i)
						
						return <li className = "resultList" key = {i} style = {{fontSize: baseFontSize}} onClick = {() => this.props.onPlanetClick(curr)}> {curr.name} </li>
					})
				}
			</ul>
		</div>
    );
  }
}
