import React from 'react';

import {
    Switch,
    Route,
  } from "react-router-dom";

import Weather from './component/Weather';
import CityCharts from './component/CityCharts';


const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Weather}/>
                <Route path="/:cityId" component={CityCharts}/>
            </Switch>
        </div>
    )
}

export default App;