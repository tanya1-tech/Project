import './App.css';
import { Route , Routes } from 'react-router-dom';

import Banner from './components/BannerComponent/Banner';
import Content from './components/ContentComponent/Content';
import Footer from './components/FooterComponent/Footer';
import Header from './components/HeaderComponent/Header';
import Nav from './components/NavComponent/Nav';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Ourproject from './components/OurprojectComponent/Ourproject';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Logout from './components/LogoutComponent/Logout';
import Adminhome from './components/AdminHomeComponent/Adminhome';
import Manageusers from './components/ManageusersComponent/Manageusers';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import AddCategory from './components/AddCategory/AddCategory';
import AddSubCategory from './components/AddSubCategory/AddSubCategory';
import Userhome from './components/UserHomeComponent/Userhome';
import SearchRentalProperty from './components/SearchRentalPropertyComponent/SearchRentalProperty';
import SearchSubCategory from './components/SearchSubCategoryComponent/SearchSubCategory';
import Verifyuser from './components/VerifyuserComponent/Verifyuser';
import Charity from './components/CharityComponent/Charity';
import Payment from './components/PaymentComponent/Payment';
import Success from './components/SuccessComponent/Success';
import Cancel from './components/CancelComponent/Cancel';

function App() {
  return (
<>

<Header />

<Banner />

<Nav />

<Routes>
      <Route path='/' element={<Content />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/ourproject' element={<Ourproject />} ></Route>
      <Route path='/register' element={<Register />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/logout' element={<Logout />} ></Route>
      <Route path='/admin' element={<Adminhome />} ></Route>
      <Route path='/manageusers' element={<Manageusers />} ></Route>
      <Route path='/epadmin' element={<EPAdmin />} ></Route>
      <Route path='/cpadmin' element={<CPAdmin />} ></Route>
      <Route path='/addcategory' element={<AddCategory />} ></Route>
      <Route path='/addsubcategory' element={<AddSubCategory />} ></Route>
      <Route path='/user' element={<Userhome />} ></Route>
      <Route path='/searchrp' element={<SearchRentalProperty />} ></Route>
      <Route path='/searchsc/:catnm' element={<SearchSubCategory />} ></Route>
      <Route path='/verify/:vemail' element={<Verifyuser />} ></Route>
      <Route path='/charity' element={<Charity />} ></Route>
      <Route path='/payment/:uid/:amt' element={<Payment />} ></Route>
      <Route path='/success' element={<Success />} ></Route>
      <Route path='/cancel' element={<Cancel />} ></Route>

</Routes>

<Footer />

</>
  );
}

export default App;
