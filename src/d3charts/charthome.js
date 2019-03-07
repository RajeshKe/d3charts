import React, { Component } from "react";
import {connect} from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LineChartComponent from './lineChart';
import ScatterChart from './scatterchart';
import BarChartComponent from './barchart';

@connect(
    state => ({
      userName: state.login.userName
    })
)

class ChartHome extends Component {
    render() {
        const {userName} = this.props;
        return (
            <div>

                <div className="Welcomebox">
                    Welcome: {userName}
                </div>
            <div style={{width: '800px',margin:'50px auto', position: 'relative'}}>
                
                <Tabs>
                    <TabList>
                        <Tab>Line Chart</Tab>
                        <Tab>Scatter Chart</Tab>
                        <Tab>Bar Chart</Tab>
                    </TabList>
                
                    <TabPanel className="centerchart">
                        <LineChartComponent />
                    </TabPanel>
                    <TabPanel className="centerchart">
                        <ScatterChart />
                    </TabPanel>
                    <TabPanel className="centerchart">
                        <BarChartComponent />
                    </TabPanel>
                </Tabs>
            </div>
            </div>
        );
    }
}

export default ChartHome;
