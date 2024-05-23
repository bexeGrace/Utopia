import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import RegistrationForm from './pages/Signup';
import SignInPage from './pages/Signin';
import ScrollToTop from './components/ScrollTop';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route  path="/admin/dashboard" element={<AdminDashboard />} />
          {/* Other routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
