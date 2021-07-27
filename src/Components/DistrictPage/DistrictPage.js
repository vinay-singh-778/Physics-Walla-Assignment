import React from "react";
import "./DistrictPage.css";
import { useSelector } from "react-redux";

function DistrictPage(props) {
	const stateName = props.match.params.stateName;
	const districtName = props.match.params.districtName;
	const loadedData = useSelector((state) => state.loadedData);
	let districtData = {
       
    };

	if (loadedData ? loadedData[stateName] : null) {
		districtData = loadedData[stateName]['districtData'][districtName];
        // console.log(districtData);
	}

	return (
		<>
			<h3>District : {districtName}</h3>
			<div className='data-wrapper'>
				<div className='Covid-stats'>Recovered : {districtData.recovered}</div>
				<div className='Covid-stats'>active : {districtData.active}</div>
				<div className='Covid-stats'>confirmed : {districtData.confirmed}</div>
				<div className='Covid-stats'>Migrated to Other : {districtData.migratedother}</div>
				<div className='Covid-stats'>deceased : {districtData.deceased}</div>
				<div>
					<h7>Delta-Varient </h7>
					<div className='Delta-stats'>
						<div className='Covid-stats'>recovered : {districtData.delta.recovered}</div>
						<div className='Covid-stats'>deceased: {districtData.delta.deceased}</div>
						<div className='Covid-stats'>confirmed : {districtData.delta.confirmed}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DistrictPage;
