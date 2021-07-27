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
			<h1>District : {districtName}</h1>
			<div className='data-wrapper'>
				<div className='Covid-stats'>Confirmed : {districtData.confirmed}</div>
				<div className='Covid-stats'>Active : {districtData.active}</div>
				<div className='Covid-stats'>Recovered : {districtData.recovered}</div>
				<div className='Covid-stats'>Deceased : {districtData.deceased}</div>
				<div className='Covid-stats'>Migrated to Other : {districtData.migratedother}</div>
				<div>
					<h7>Delta-Varient </h7>
					<div className='Delta-stats'>
						<div className='Covid-stats'>Confirmed : {districtData.delta.confirmed}</div>
						<div className='Covid-stats'>Recovered : {districtData.delta.recovered}</div>
						<div className='Covid-stats'>Deceased: {districtData.delta.deceased}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DistrictPage;
