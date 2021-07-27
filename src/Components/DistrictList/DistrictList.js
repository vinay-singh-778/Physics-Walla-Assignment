import React from "react";
import "./DistrictList.css";
import { Link } from "react-router-dom";

function DistrictList(params) {
	const navStyle = {
		color: "white",
		textDecoration: "none",
	};
	let data = params.data;
	const stateName = params.stateName;
	return data[0] ? (
		<div className='list-wrapper'>
			{data.map((item, index) => {
				return (
					<Link to={`/india/${stateName}/${item}`} style={navStyle}>
						<div className='list-item'>{item}</div>
					</Link>
				);
			})}
		</div>
	) : (
		<div>
			Loading{" "}
			<span role='img' aria-label='img-loading'>
				🌌
			</span>
		</div>
	);
}

export default DistrictList;
