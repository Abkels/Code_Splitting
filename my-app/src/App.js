import React, { Component , Suspense} from 'react';
import './App.css';


import Page1 from './Components/Page1';

// Dynamic import
const Page2Lazy = React.lazy(()=> import('../src/Components/Page2'))
const Page3Lazy = React.lazy(()=> import('../src/Components/Page3'))

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    }
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  }
  
  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
      
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    } else {
      return (
        <Suspense>
          <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      )
    }
     
  }
}

export default App

// Using functional components
// import React, { useState, Suspense } from 'react';
// import './App.css';
// import logo from './logo.svg';

// import Page1 from './Components/Page1';

// const Page2Lazy = React.lazy(() => import('./Components/Page2'));
// const Page3Lazy = React.lazy(() => import('./Components/Page3'));

// const App = () => {
//   const [route, setRoute] = useState('page1');

//   const onRouteChange = (newRoute) => {
//     setRoute(newRoute);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to {route === 'page1' ? 'Page 1' : route === 'page2' ? 'Page 2' : 'Page 3'}</h1>
//       </header>

//       {route === 'page1' ? (
//         <Page1 onRouteChange={onRouteChange} />
//       ) : route === 'page2' ? (
//         <Suspense fallback={<div>Loading...</div>}>
//           <Page2Lazy onRouteChange={onRouteChange} />
//         </Suspense>
//       ) : (
//         <Suspense fallback={<div>Loading...</div>}>
//           <Page3Lazy onRouteChange={onRouteChange} />
//         </Suspense>
//       )}
//     </div>
//   );
// }

// export default App;


// /* using react-router-dom is a better option
// 1.Organize ur project structure with components 
// src/
//   components/
//     Page1.js
//     Page2.js
//     ...
//     Page10.js
//   App.js

//   2. use BrowserRouter and link in your app.js
//   import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import './App.css';
// import logo from './logo.svg';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Your App</h1>
//         </header>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/page1">Page 1</Link>
//             </li>
//             <li>
//               <Link to="/page2">Page 2</Link>
//             </li>
//             {/* Add similar Link components for Page3 to Page10 */}
//             </ul>
//             </nav>
//             <Route path="/page1" component={Page1} />
//             <Route path="/page2" component={Page2} />
//             {/* Add similar Route components for Page3 to Page10 */}
//           </div>
//         </BrowserRouter>
//       );
//     }
    
//     export default App;
    
