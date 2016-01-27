import React from 'react'
import { render } from 'react-dom'

module.exports = React.createClass({
  getInitialState(){
    return {
      forexes: []
    }
  },

  componentDidMount () {
    $.getJSON('https://gist.githubusercontent.com/npm-install/79ffd949012835f9f860/raw/16611c6c92874ba6d8c76ab68ea07b1b6a534867/forex.json', (res)=>{
      this.setState({
        forexes: res.forexes
      });
    });
  },

  render: function() {
    const forexes = this.state.forexes.map((item, index) => {
      let unit = item.BaseCurrency == 'INR' ? 100 : 1;
      return (
        <tr key={item._id}>
          <td>{item.BaseCurrency}</td>
          <td>{unit}</td>
          <td>{item.ConversionRate}</td>
        </tr>
      )});

      return (
        <table className="table">
        <h2>Forex</h2>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Unit</th>
              <th>Exchange Rate</th>
            </tr>
          </thead>
          <tbody>
            {forexes}
          </tbody>
        </table>
      );
    // return (
    //       <div>
    //         <h2>Forex</h2>
    //         <ul>{forexes}</ul>
    //       </div>
    //     );
  }

});
