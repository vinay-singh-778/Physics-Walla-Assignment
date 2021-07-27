import react, { useState, useEffect } from "react";
import DistrictList from "../DistrictList/DistrictList";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

function StatePage(props) {
	const stateName = props.match.params.stateName;
	const loadedData = useSelector((state) => state.loadedData);
	let districtArray = [];
	if (loadedData ? loadedData[stateName] : null) {
		districtArray = Object.keys(loadedData[stateName].districtData);
	}
	// console.log(districtArray);

	const config = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "First dataset",
				data: [33, 53, 85, 41, 44, 65],
				fill: true,
				backgroundColor: "rgba(75,192,192,0.2)",
				borderColor: "rgba(75,192,192,1)",
			},
			{
				label: "Second dataset",
				data: [33, 25, 35, 51, 54, 76],
				fill: false,
				borderColor: "#742774",
			},
			{
				label: "dataset",
				data: [33, 25, 35, 51, 54, 76],
				fill: false,
				borderColor: "#742774",
			},
		],
	};

	return (
		<>
			<h1>{props.match.params.stateName}</h1>
			<div className='graph-wrapper'>
				<Line data={config} />
			</div>
			<DistrictList data={districtArray} stateName={stateName} />
		</>
	);
}
export default StatePage;
