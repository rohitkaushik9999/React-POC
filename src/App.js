//import logo from './logo.svg';
import './App.css';
//import DashBoard from './assignment1/dashboard/DashBoard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from './assignment1/header/HeaderComponent';
import HomeComponent from './assignment1/bodyContent/HomeComponent';
import FooterComponent from './assignment1/footer/FooterComponent';
import RestCallData from './assignment1/APICall/RestCallData';
import TodoList from './assignment1/TODOList/TodoList';
import ImageGallery from './assignment1/Redux/ImageGallery';
import Auth from './assignment1/Authentication/Auth';
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

function App() {
  let isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuth in App.js  = ", isAuth);
 
  return (
    <div className="App">
      <Router>
        {!isAuth && <Auth />}
        {isAuth && <HeaderComponent />}
        {isAuth && (
          <Routes>
            <Route exact path="/" element={<HomeComponent />}></Route>
            <Route exact path="/apiCall" element={<RestCallData />}></Route>
            <Route
              exact
              path="/ImageGallery"
              element={<ImageGallery />}
            ></Route>
            <Route
              exact
              path="/Chart"
              element={
                <Chart
                  chartType="ScatterChart"
                  data={[
                    ["Age", "Weight"],
                    [4, 5.5],
                    [8, 12],
                  ]}
                  width="100%"
                  height="400px"
                  legendToggle
                />
              }
            ></Route>
            <Route exact path="/TodoList" element={<TodoList />}></Route>
          </Routes>
        )}
        {isAuth && <FooterComponent />}
      </Router>
    </div>
  );
}

export default App;
