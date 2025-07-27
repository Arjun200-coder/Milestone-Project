
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { PublicLayout } from "./layout";
// import { AuthLayout } from './layout';
import { HomePage } from "./pages/Home";
import { AboutUsPage } from "./pages/AboutUs";
import { SellCompanyPage } from "./pages/SellCompany";
import { BuyCompanyPage } from "./pages/BuyCompany";
import { ContactUsPage } from "./pages/ContactUs";
// import { ForgotPasswordPage, LoginPage, RegisterPage, ResetPasswordPage } from "./pages/Auth";

const AppRoutes = () => {
  return (
       <Suspense 
        fallback={<div className="text-black">loading</div>}>
            <Routes>
                {/* <Route element={<AuthLayout/>} >
                    <Route path="/" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forgot-password" element={<ResetPasswordPage/>} />
                    <Route path="/reset-password" element={<ForgotPasswordPage />} />
                </Route> */}

                <Route element={<PublicLayout/>} >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/sell-company" element={<SellCompanyPage />} />
                    <Route path="/buy-company" element={<BuyCompanyPage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                </Route>
            </Routes>
       </Suspense>
  )
};

export default AppRoutes;