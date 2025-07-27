
import WebLogo from '../../../assets/logo.png'; 
import { NavLink } from 'react-router-dom';

const AuthHeaderContent = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-start items-center">
        <img
          src={WebLogo}
          alt="Milestone Logo"
          className="h-12 md:h-16 w-auto"
        />
      </div>
    </header>

    // <header className="bg-white shadow-md mt-6 mb-10 py-2 px-5">
    //   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-4 py-3">
        
    //     <div className="mb-2 md:mb-0">
    //       <img 
    //         src={WebLogo} 
    //         alt="Web Logo" 
    //         className="h-12 w-auto"
    //       />
    //     </div>

    //     <nav>
    //       <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-700 font-medium">
    //         <li>
    //           <NavLink to="/" className="text-gray-700 font-semibold hover:text-blue-600 hover:underline">
    //             Register
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/login" className="text-gray-700 font-semibold  hover:text-blue-600 hover:underline">
    //             Login
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/forgot-password" className="text-gray-700 font-semibold hover:text-blue-600 hover:underline">
    //             Forgot Password
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/reset-password" className="text-gray-700 font-semibold hover:text-blue-600 hover:underline">
    //             Reset Password
    //           </NavLink>
    //         </li>
    //       </ul>
    //       </nav>
    //     </div>
    // </header>
  );
};

export default AuthHeaderContent;
