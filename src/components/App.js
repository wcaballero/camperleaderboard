import React, { Component } from 'react';
import RecentPoints from './recent_points';
import AllTimePoints from './all_time_points';
import downArrow from './downArrow.svg';
import upArrow from './upArrow.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPoints: 'RECENTPOINTS',
      recentArrow: downArrow,
      allTimeArrow: upArrow
    };
  }

  // method to toggle arrows (down arrow is displayed, up arrow is not displayed)
  togglePoints(points) {
    // no need to change the state
    if(points === this.state.currentPoints){
      return;
    }
    console.log(this.state.currentPoints);
    console.log(points);
    // toggles when the arrow position (up/down)
    if(points === 'RECENTPOINTS'){
      this.setState({
        currentPoints: 'RECENTPOINTS',
        recentArrow: downArrow,
        allTimeArrow: upArrow
      });
    } else {
      this.setState({
        currentPoints: 'ALLTIMEPOINTS',
        recentArrow: upArrow,
        allTimeArrow: downArrow
      });
    }
  }
  // renders the component based on the arrow position
  renderComponent() {
    // return <AllTimePoints />;
     if (this.state.currentPoints === 'RECENTPOINTS'){
       return <RecentPoints />;
     } else {
       return <AllTimePoints />;
     }
  }

  render() {
    return (
      <div className="App container">
        <h2 className="bg-success">Leaderboard</h2>
        <table className="table table-striped table-sm">
          <thead>
            <tr className="table-bordered">
              <th>#</th>
              <th>Camper name</th>
              <th><img src={this.state.recentArrow} alt="RECENTPOINTS" onClick={() => {this.togglePoints("RECENTPOINTS");}}/> Points in past 30 days</th>
              <th><img src={this.state.allTimeArrow} alt="ALLTIMEPOINTS" onClick={() => {this.togglePoints("ALLTIMEPOINTS");}}/> All time points</th>
            </tr>
          </thead>
          {this.renderComponent()}
        </table>
      </div>

    );
  }
}

export default App;
