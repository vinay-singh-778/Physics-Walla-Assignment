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
		deceasedArray = [],
		confirmed = 0,
		active = 0,
		recovered = 0,
		deceased = 0,
		migratedother = 0;

	if (loadedData ? loadedData[stateName] : null) {
		districtArray = Object.keys(loadedData[stateName].districtData);

		districtArray.map((district, index) => {
			confirmedArray[index] =
				loadedData[stateName].districtData[district].confirmed;

			recoveredArray[index] =
				loadedData[stateName].districtData[district].recovered;

			deceasedArray[index] =
				loadedData[stateName].districtData[district].deceased;

			recovered += loadedData[stateName].districtData[district].recovered;
			deceased += loadedData[stateName].districtData[district].deceased;
			confirmed += loadedData[stateName].districtData[district].confirmed;
			active += loadedData[stateName].districtData[district].active;
			migratedother += loadedData[stateName].districtData[district].migratedother;
		});
	}

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
			<Line data={config} height='250px'/>
			<div className='data-wrapper'>
				<div className='Covid-stats'>Confirmed : {confirmed}</div>
				<div className='Covid-stats'>Active : {active}</div>
				<div className='Covid-stats'>Recovered : {recovered}</div>
				<div className='Covid-stats'>Deceased : {deceased}</div>
				<div className='Covid-stats'>Migrated to Other : {migratedother}</div>
			</div>
			<DistrictList data={districtArray} stateName={stateName} />
		</>
	);
}
export default StatePage;
