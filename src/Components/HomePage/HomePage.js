import React from "react";
import StateList from "../StateList/StateList";
import { useSelector } from "react-redux";

export default function HomePage() {
	let stateArray = null;
	stateArray = Object.keys(useSelector((state) => state.loadedData));
	return (
		<div className='home-page'>
			<h1>
				<StateList data={stateArray} />
			</h1>
		</div>
	);
}
