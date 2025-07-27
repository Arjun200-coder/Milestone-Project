
import WebLogo from '../../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const PublicHeaderContent = () => {
  return (
    <>
    
<header className="bg-white shadow-md mt-6 mb-10 py-2 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-4 py-3">
        
        <div className="mb-2 md:mb-0">
          <img 
            src={WebLogo} 
            alt="Web Logo" 
            className="h-12 w-auto"
          />
        </div>

        <nav>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-700 font-medium">
            <li>
              <NavLink to="/" className="text-gray-700 font-semibold hover:text-blue-600 hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-700 font-semibold hover:text-blue-600 hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/sell-company" className="text-gray-700 font-semibold  hover:text-blue-600 hover:underline">
                Sell Company
              </NavLink>
            </li>
            <li>
              <NavLink to="/buy-company" className="text-gray-700 font-semibold hover:text-blue-600 hover:underline">
                Buy Company
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="text-gray-700 font-semibold hover:text-blue-600 hover:underline">
                Contact Us
              </NavLink>
            </li>
          </ul>
          </nav>
        </div>
    </header>
    </>
  )
}

export default PublicHeaderContent;