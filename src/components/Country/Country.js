import React from 'react';

const Country = (props) => {
    const {name, population, region,flag} =props.country;
    const flagStyle ={height:'50px'};
    const countryStyle ={
        border:'1px solid red', margin:'10px', padding: '10px',backgroundColor:'cyan'
    }
    const buttonStyle={border:'1px solid gray', backgroundColor:'orange'}
    const handleAddCountry =props.handleAddCountry;

    return (
        <div style={countryStyle}>
           <h3>Country Name :  {name}</h3>
           <img style={flagStyle} src={flag} alt=""/>
    <p>Population : {population}</p>
    <p><small>Region :{region}</small></p>
    <button style={buttonStyle} onClick={() =>handleAddCountry(props.country)}>Add Country</button> 
        </div>
    );
};
 
export default Country;