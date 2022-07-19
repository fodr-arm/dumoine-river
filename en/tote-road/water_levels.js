'use strict';

const e = React.createElement;

class WaterLevels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    if (this.state.open) {
      const url = 'https://www.cehq.gouv.qc.ca/Suivihydro/graphique.asp?NoStation=041902' 
      fetchAsync(url);
      return ('div', null, 'test')
    }

    return e(
      'button',
      { onClick: () => this.setState({ open: true }) },
      'View Live Water Levels'
    );
  }
}

const domContainer = document.querySelector('#water_levels_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(WaterLevels));

async function fetchAsync (url) {
  let response = await fetch(url, {method: 'GET', mode: 'no-cors'});
  let data = await response;
  console.log(data);
}