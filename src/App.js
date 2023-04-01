import logo from './logo.svg';
import './App.css';
import Layout from './app/component/layout/layout';
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Layout/>
    
   </div>
   </BrowserRouter>
  );
}

export default App;
