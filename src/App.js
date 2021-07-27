import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APP_LOAD } from "./Redux/Actions/appLoadAction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage.js';
import StatePage from './Components/StatePage/StatePage.js'
import Nav from './Components/Navbar/Nav';
import DistrictPage from './Components/DistrictPage/DistrictPage';

function App() {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(APP_LOAD());
	}, []);


	return (
		<div className='App'>
			<Router>
				<div className='App'>
					<Nav />
					<Switch>
						<Route path='/' exact component={HomePage} />
						<Route path='/india' exact component={HomePage} />
						<Route path='/india/:stateName' exact component={StatePage} />
						<Route path='/india/:stateName/:districtName' exact component={DistrictPage} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
