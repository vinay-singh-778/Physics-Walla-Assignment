import react, { useState, useEffect } from "react";
import DistrictList from "../DistrictList/DistrictList";
import { useSelector } from "react-redux";

function StatePage(props) {
	const stateName = props.match.params.stateName;
	const loadedData = useSelector((state) => state.loadedData);
	let districtArray = [];
	if (loadedData ? loadedData[stateName] : null) {
		districtArray = Object.keys(loadedData[stateName].districtData);
	}
	console.log(districtArray);

	return (
		<>
			<h1>{props.match.params.stateName}</h1>
			<DistrictList data={districtArray} stateName={stateName} />
		</>
	);
}
export default StatePage;
