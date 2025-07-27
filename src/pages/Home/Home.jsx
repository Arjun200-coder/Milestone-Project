
import FirstImage from '../../assets/generated-image.png';
import SecondImage from '../../assets/image 4.png';
import ThirdImage from '../../assets/image 1.png';
import FourthImage from '../../assets/image 8.png';
import FifthImage from '../../assets/Video cover IFBde8jL5tE.png'
import WebLogo from '../../assets/logo.png'

import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialYoutubeCircular } from "react-icons/ti";


const HomePage = () => {
  return (
    <>
   <section className="flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-2 py-2 bg-white gap-10">
        <div className='space-y-6 md:w-1/2'>
            <h1 className='text-blue-800 font-extrabold text-4xl md:text-6xl'>Milestone Mergers, <br/>LLc</h1>
            <p className='text-gray-700 text-lg leading-relaxed '>
                Milestone Mergers helps you start your own mortgage company while you continue your job. Designed for loan officers, branch 
                and regional managers.
            </p>
            <button className="ml-6 font-semibold mt-4 px-15 py-2.5 text-white bg-blue-800 rounded-3xl hover:bg-blue-700 transition cursor-pointer">
                Contact Us
            </button>
        </div>
        <div>
            <img 
            src={FirstImage} 
            alt="Team Photo"
            className='w-full h-auto' />
        </div>
    </section>


    <section className="mt-28 w-full bg-white py-2 px-5 md:px-5">
  <h2 className="text-center text-3xl text-black font-bold mb-12">
    Milestone Services
  </h2>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

    <div className="w-full md:w-1/2 mt-14">
      <img
        src={SecondImage} 
        alt="Service Illustration"
        className="rounded-xl w-full object-cover max-h-[500px]"
      />
    </div>

    <div className="w-full md:w-1/2 flex flex-col gap-6">
      
      <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-4">
          <img src="https://img.icons8.com/ios-filled/50/000000/alarm.png" className="w-8 h-8" alt="icon" />
          <div>
            <h3 className="font-semibold text-lg">Sell a mortgage Company</h3>
            <p className="text-gray-600 text-sm mt-1">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <a href="#" className="text-blue-600 font-medium text-sm mt-2 inline-block">Read More</a>
          </div>
        </div>
      </div>

      <div className=" ml-16 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-4">
          <img src="https://img.icons8.com/ios-filled/50/000000/computer.png" className="w-8 h-8" alt="icon" />
          <div>
            <h3 className="font-semibold text-lg">Buy a mortgage Company</h3>
            <p className="text-gray-600 text-sm mt-1">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <a href="#" className="text-blue-600 font-medium text-sm mt-2 inline-block">Read More</a>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-4">
          <img src="https://img.icons8.com/ios-filled/50/000000/rocket.png" className="w-8 h-8" alt="icon" />
          <div>
            <h3 className="font-semibold text-lg">Start a mortgage Company</h3>
            <p className="text-gray-600 text-sm mt-1">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <a href="#" className="text-blue-600 font-medium text-sm mt-2 inline-block">Read More</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    <section className="px-5 py-2 md:px-5 bg-white mt-28">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Partner with Banks</h2>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
        Develop commercial banking relationships. They would like their partners to bank with them.
        This would also be of benefit to the mortgage company, as they would receive preferential
        rates and service levels for their banking needs. Run the loan volume through their
        secondary marketing department.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Federally regulated bank wants to Partner with Mortgage Company
          </h3>
          <p className="font-bold mb-4">10% economic / 25% voting ownership</p>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Upfront Cash Payment</li>
            <li>✅ Close Loans in all 50 States.</li>
            <li>✅ Exemption from state licensing requirements.</li>
            <li>
              ✅ Access to Banks warehouse line at a reduced cost to you.
            </li>
            <li>
              ✅ Accounting, IT, HR and Compliance services if desired.
            </li>
            <li>✅ No changes to your company at all.</li>
          </ul>

          <button className="mt-6 cursor-pointer px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition font-semibold">
            Download Bank Pdf
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={ThirdImage}
            alt="Money Money"
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>
    </section>

    <section className='w-full py-2 px-5 '>
        <div className='mt-22 rounded-xl p-6 pt-10 h-54 bg-gradient-to-r from-blue-800 to-blue-400'>
            <h2 className='text-2xl text-white font-bold'>Ready to Schedule a call to discuss selling your<br/> mortgage company.</h2>
            <div className=' flex gap-6 pt-6'>
                <h3 className=' pt-4 text-2xl text-white '>703-501-0500</h3>
            <h3 className=' pt-4 text-2xl text-white '>Gary.Freedman@MilestoneMergers.com</h3>
            </div>
        </div>
    </section>



    <section className="bg-white py-2 px-5 md:px-5">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold mt-22">Company of the Week</h2>
    <p className="text-xl font-semibold text-blue-700 mt-6">Established 2024</p>
  </div>

  <div className=" mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 text-[17px]">
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Closed Loan Volume - $800 million
    </div>
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Servicing - $300 million
    </div>
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Geography - MidAtlantic.
    </div>
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Revenue - $31 Million.
    </div>
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Channel - 100% retail.
    </div>
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Offices - 9 states.
    </div>
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Net Income - $4 million
    </div>
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Product Mix - 55% Conv. 45% Govt.
    </div>
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Licensed - 22 states.
    </div>
    <div className="flex items-start gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      Agency approvals - All.
    </div>
  </div>

  <div className="mt-16 flex flex-col items-center gap-6">
  <div className="w-full">
    <img 
      src={FourthImage}
      alt="Buildings" 
      className="w-full h-auto rounded-xl shadow-lg" />
  </div>
</div>

</section>



   <section className="px-5 md:px-5 py-2 bg-white mt-20">
  <div className="flex justify-between items-center mb-16">
    <h2 className="text-3xl font-bold">Videos</h2>
    <a href="#" className="text-xl text-blue-600 font-bold hover:underline">View All</a>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
      src={FifthImage}
      alt="Video 1" 
      className="w-full h-auto rounded-xl" />
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold w-10/12">
            Be Realistic About What Your Company is Worth Without You
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          Featuring Gary Freedman and Kristen McAlister
        </p>
      </div>
    </div>

    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
      src={FifthImage}
      alt="Video 2" 
      className="w-full h-auto rounded-xl" />
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold w-10/12">
            Most Transactions Do Not Get Done Because of Money
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          Featuring Gary Freedman and Kristen McAlister
        </p>
      </div>
    </div>

    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
      <img 
      src={FifthImage}
      alt="Video 3" 
      className="w-full h-auto rounded-xl m-" />
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold  w-10/12">
            Be Realistic About What Your Company is Worth Without You
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <p className="text-gray-600 mt-3 text-sm">
          Featuring Gary Freedman and Kristen McAlister
        </p>
      </div>
    </div>
  </div>
</section>


<section className='mt-16 flex flex-col py-2 px-5 items-center justify-center'>
    <span className='h-[1.5px] w-[100vw] rounded-xl bg-blue-200 mb-12'/>
    <div>
        <img 
        src={WebLogo}
        alt="Web Logo" 
        className=''/>
    </div>
    <div className='flex flex-row gap-5 mt-4'>
        <div>
        <CiFacebook className='text-4xl text-blue-800'/>
        </div>
        <div>
        <RiTwitterXFill className='text-4xl text-blue-800' />
        </div>
        <div>
        <TiSocialYoutubeCircular className='text-4xl text-blue-800' />
        </div>

    </div>
</section>
    </>
  )
}

export default HomePage;