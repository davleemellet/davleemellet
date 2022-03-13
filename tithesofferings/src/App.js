// {/* The following line can be included in your src/index.js or App.js file*/}
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      {/* <h1>Tithes and Offering</h1> */}
      {/* <Home/> */}
      <SignUp />
    </div>
  );
}

export default App;
