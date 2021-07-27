import react, { useState, useEffect } from "react";
import DistrictList from "../DistrictList/DistrictList";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

function StatePage(props) {
	const stateName = props.match.params.stateName;
	const loadedData = useSelector((state) => state.loadedData);
	let districtArray = [],
		confirmedArray = [],
		recoveredArray = [],
		deceasedArray = [];
	if (loadedData ? loadedData[stateName] : null) {
		districtArray = Object.keys(loadedData[stateName].districtData);
		districtArray.map((district, index) => {
			confirmedArray[index] =
				loadedData[stateName].districtData[district].confirmed;
			recoveredArray[index] =
				loadedData[stateName].districtData[district].recovered;
			deceasedArray[index] =
				loadedData[stateName].districtData[district].deceased;
			console.log();
		});
	}
	// console.log(districtArray);

	const config = {
		labels: districtArray,
		datasets: [
			{
				label: "Confirmed",
				data: confirmedArray,
				fill: false,
				backgroundColor: "rgb(75,255,1)",
				borderColor: "#0000ff",
			},
			{
				label: "Recovered",
				data: recoveredArray,
				fill: false,
				borderColor: "#00FF00",
			},
			{
				label: "Deceased",
				data: deceasedArray,
				fill: false,
				borderColor: "#FF0000",
			},
		],
	};

	return (
		<>
			<h1>{props.match.params.stateName}</h1>
			<Line data={config} />
			<DistrictList data={districtArray} stateName={stateName} />
		</>
	);
}
export default StatePage;
