// 'use strict';

// const e = React.createElement;

// class FireRisk extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { open: false };
//     }

    

//     render() {


//         if (this.state.open) {
//              let request = new XMLHttpRequest();
//              request.open("GET", "https://cartes.sopfeu.qc.ca/risk-zones");
//              request.send();
//              request.onload = () => {
//                 console.log(request);
//                 if (request.status === 200) {
//                     console.log(JSON.parse(request.response));
//                 } else {
//                     console.log("error")
//                 }
//              }
//         }

//         return e(
//             'button',
//             { onClick: () => this.setState({ open: true }) },
//             'Test'
//         )
//     }
// }

// const domContainer = document.querySelector('#fire_risk_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(FireRisk));