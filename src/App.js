import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<h1>home page</h1>}
          />
          <Route
            path='/explore'
            element={<Explore />}
          />
          <Route
            path='/forgot-password'
            element={<ForgotPassword />}
          />
          <Route
            path='/offers'
            element={<Offers />}
          />
          <Route
            path='/profile'
            element={<PrivateRoute />}
          >
            <Route
              path='/profile'
              element={<Profile />}
            />
          </Route>
          
          <Route
            path='/sign-in'
            element={<SignIn />}
          />
          <Route
            path='/sign-up'
            element={<SignUp />}
          />
        </Routes>
        {/* <Navbar /> */}
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
