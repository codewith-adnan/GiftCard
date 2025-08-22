import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 //Layouts
import AuthLayouts from "./layouts/AuthLayouts";
import MainLayouts from "./layouts/MainLayouts";

 //auth sacreen's
import GiftLogin from "./auth/login";
import ResetPassword from "./auth/resetPassword";
import EmailCheck from "./auth/checkEmail";
import NewPassword from "./auth/newPassword";

// main screen's
import Dashboard from "./pages/dashboard";
import Categories from "./pages/categories";
import MyPolicies from "./pages/policies";
import GiftCards from "./pages/giftcards";
import Users from "./pages/users";
import TotalBrands from "./pages/totalbrands";
import Orders from "./pages/orders";
import UsersDetail from "./pages/usersDetail";
import EditePolicy from "./pages/editePolicy";
import CreatePolicy from "./pages/createPolicy";
import NotificationList from "./pages/notification";
import MyProfile from "./pages/myProfile";
import Settings from "./pages/settings";
import UncategoryBrands from "./pages/uncategoryBrands";

function App() {
  return (
    <div style={{ fontFamily: "Inter" }}>
       <Router>
        <Routes>
          {/* AUTH LAYOUT ROUTES */}
           <Route element={<AuthLayouts />}>
            <Route path="/" element={<GiftLogin />} />
            <Route path="/auth/login" element={<GiftLogin />} />
            <Route path="/auth/resetpassword" element={<ResetPassword />} />
            <Route path="/auth/checkEmail" element={<EmailCheck />} />
            <Route path="auth/newPassword" element={<NewPassword />} />
          </Route> 

          {/* MAIN LAYOUT ROUTES */}
           <Route element={<MainLayouts />}>
            <Route path="/pages/dashboard" element={<Dashboard/>} />
            <Route path="/pages/categories" element={<Categories/>} />
            <Route path="/pages/giftcards" element={<GiftCards/>} />
            <Route path="/pages/policies" element={<MyPolicies/>} />
            <Route path="/pages/totalbrands" element={<TotalBrands/>} />
            <Route path="/pages/users" element={<Users/>} />
            <Route path="/pages/orders" element={<Orders/>}/>
            <Route path="/pages/usersDetail" element={<UsersDetail/>} />
            <Route path="/pages/editePolicy" element={<EditePolicy/>}/>
            <Route path="/pages/createPolicy" element={<CreatePolicy/>}/>
            <Route path="/pages/notification" element={<NotificationList/>}/>
            <Route path="/pages/myProfile" element={<MyProfile/>}/>
            <Route path="/pages/settings" element={<Settings/>}/>
            <Route path="/pages/uncategoryBrands" element={<UncategoryBrands/>}/>



          </Route>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
