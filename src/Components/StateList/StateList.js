import React from "react";
import "./StateList.css";
import { Link } from "react-router-dom";

function StateList(params) {
	const navStyle = {
		color: "white",
		textDecoration: "none",
	};
	let data = params.data;
	return data[0] ? (
		<div className='state-list-wrapper'>
			{data.map((item, index) => {
				if (index) {
					return (
						<Link to={`/india/${item}`} style={navStyle}>
							<div className='state-list-item'>{item}</div>
						</Link>
					);
				}
				return "";
			})}
		</div>
	) : (
		<div className="wrapper">
			<div className = "movingBox"></div>
		</div>
	);
}

export default StateList;
