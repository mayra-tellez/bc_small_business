import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './Redux/Store'

import Nav from "./Components/Nav"

function App() {
  return (
    // <Provider store={store}>
     <BrowserRouter>
      <Nav />
      <Router />
     </BrowserRouter> 
    // </Provider>
    
  );
}

export default App;
