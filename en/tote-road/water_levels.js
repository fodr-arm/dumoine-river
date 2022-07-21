// 'use strict';

// const e = React.createElement;

// class WaterLevels extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { open: false };
//   }
  
//   render() {

//     var resoibse= curl('https://www.cehq.gouv.qc.ca/Suivihydro/graphique.asp?NoStation=041902');
//     console.log(resoibse);

//     var myHeaders = new Headers();
//     myHeaders.append("Cookie", "ASPSESSIONIDCWTSCTRB=JBFJFKBAKOPEAGBCPDDIPLCL");
//     myHeaders.append("Allow-Access-Control-Origin", "*")
    

//     var requestOptions = {
//       method: 'GET',
//       mode: 'cors',
//       headers: myHeaders,
//       redirect: 'follow',
//       origin: 'null'
//     };
    

//     if (this.state.open) { 
//       fetch("https://www.cehq.gouv.qc.ca/Suivihydro/graphique.asp?NoStation=041902", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));

//       return ('div', null, '')
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ open: true }) },
//       'View Live Water Levels'
//     );
//   }
// }

// const domContainer = document.querySelector('#water_levels_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(WaterLevels));
