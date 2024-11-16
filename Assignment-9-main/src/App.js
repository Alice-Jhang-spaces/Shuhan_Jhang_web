import { Route, Routes } from 'react-router-dom';
import LoginPage from './App/Login/LoginPage';
import MyNavbar from './App/Navbar/MyNavbar';
import JobListing from './App/JobPosts/JobListing';
// import AboutPage from './App/About/AboutPage';
import ContactPage from './App/Contact/ContactPage'
import CompanyShowCasePage from './App/Company/CompanyPage';
import FavoritedJobList from './App/User/FavoriteJobList';
import CompanyAboutPage from './App/Company/CompanyAboutPage'
import AuthRoute from './Utilities/authRoute'
import AboutPage from './App/About/AboutPage';

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/job-listing" element={<JobListing />}/>
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />  
        <Route path="/company-showcase" element={<CompanyShowCasePage />} />
        <Route path="/user-favorited-page" element={<AuthRoute><FavoritedJobList /></AuthRoute>} />
        <Route path="/company-showcase-details/:id" element={<CompanyAboutPage />}/>

        <Route path="/about" element={<AboutPage />}/>
        <Route path="/home" element={<LoginPage />}/> {/* 👈 Renders at /app/ */}

      </Routes>
    </div>

  )
  
}

export default App;
