import React, { Component } from 'react';

export default class SearchInfo extends Component {
  
  render() {
	let planet = this.props.planetData; 
	  
    return (
      <div className = "infoWrapper">
		<div className = "infoDetails"> <b>Name:</b> {planet.name} </div>
		<div className = "infoDetails"> <b>Created:</b> {planet.created} </div>
		<div className = "infoDetails"> <b>Gravity:</b> {planet.gravity} </div>
		<div className = "infoDetails"> <b>Diameter:</b> {planet.diameter} </div>
		<div className = "infoDetails"> <b>Climate:</b> {planet.climate} </div>
		<div className = "infoDetails"> <b>Orbital Period:</b> {planet.orbital_period} </div>
		<div className = "infoDetails"> <b>Rotational Period:</b> {planet.rotation_period} </div>
		<div className = "infoDetails"> <b>Population:</b> {planet.population} </div>
      </div>
    );
  }
}
