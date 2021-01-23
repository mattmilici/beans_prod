import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Summary from "./components/Summary/index";
import Tinder from "./components/TinderCard/index";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";

import { PageContext } from "./Context/PageContext.js";
import { UserData } from "./Context/UserData.js";

function App() {
	const [finalCard, setfinalCard] = useState(true);
	const [userReasons, setuserReasons] = useState({
		UserName: "Matt",
		SwipeRightPercentage: 0,
		Reasons: [
			"Overall",
			"Work",
			"Friends",
			"Family",
			"Eat Healthy",
			"Run 1 Mile",
			"Realtionship",
		],
		OverallStreak: 0,
		BestBean: "-",
		WorstBean: "-",
		SwipeRights: 0,
		TotalSwipes: 0,
	});
	return (
		// <Router>
		// 	<StoreProvider>
		// 		<Nav />
		// 		<Switch>
		// 			<div>
		// 				<PageContext.Provider value={{ finalCard, setfinalCard }}>
		// 					<UserData.Provider value={{ userReasons, setuserReasons }}>
		// 						<Tinder />
		// 					</UserData.Provider>
		// 				</PageContext.Provider>{" "}
		// 			</div>
		// 			<Route exact path="/" component={Home} />
		// 			<Route exact path="/home" component={Home} />
		// 			<Route exact path="/favorites" component={FavoritesList} />
		// 			<Route exact path="/posts/:id" component={Detail} />
		// 			<Route component={NoMatch} />
		// 		</Switch>
		// 	</StoreProvider>
		// </Router>
		<div>
			<PageContext.Provider value={{ finalCard, setfinalCard }}>
				<UserData.Provider value={{ userReasons, setuserReasons }}>
					<Tinder />
				</UserData.Provider>
			</PageContext.Provider>{" "}
		</div>
	);
}

export default App;
