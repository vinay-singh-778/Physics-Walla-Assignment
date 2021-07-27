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
		<div className='list-wrapper'>
			{data.map((item, index) => {
				if (index) {
					return (
						<Link to={`/india/${item}`} style={navStyle}>
							<div className='list-item'>{item}</div>
						</Link>
					);
				}
				return "";
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

export default StateList;
