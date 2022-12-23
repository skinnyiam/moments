import React, { useState } from "react";
import Login from "../Login/login"

const Navbar = () => {
 
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>

      <div className="z-10 backdrop-filter backdrop-blur-lg bg-opacity-0 h-14  w-screen mx-auto bg-white  shadow-xl fixed flex justify-around  border-gray-200">
        <div className="flex justify-center items-center">
          
          {/* <Link href="/">Recipeas</Link> */}
          <p className="text-base dark:text-white text-gray-800 font-medium mr-4">Moments</p>
        </div>
        <div>
       
            <>
              {/* desktop view starts */}

              {/* when user get log in  */}
              <ul className="hidden sm:flex mt-2">
          

                <button
                  className="w-[65px] h-[38px] border border-blue-700 dark:text-white font-medium rounded text-base text-blue-700"
                  
                >
                  <Login />
                </button>
                <li className="ml-2"></li>
              </ul>

              {/* desktop view ends  */}

              {/* mobile view starts  */}
              <div className="flex ml-4">
                <li className="flex sm:hidden mr-2 mt-2">
               
                </li>
                <li className="flex sm:hidden w-[50px] mt-2">
            
                </li>
                <button
                 
                  className="flex sm:hidden justify-end mt-[20px] ml-2 z-10 "
                >
                  {!nav ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      // stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      // stroke-width="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
                    </svg>
                  )}
                </button>
              </div>

                 {/* when menu button gets clicked  */}

                 <div
                className={
                  !nav
                    ? "hidden"
                    : "absolute dark:bg-black dark:text-white mt-2 sm:hidden bg-slate-200 w-full h-screen top-0 left-0 flex justify-center items-center flex-col"
                }
              >
            
                <button 
                  className="w-[65px] h-[38px] mr-8 mt-4  dark:text-white font-medium rounded text-2xl text-blue-700"
                 
                >
                  Logout
                </button>
              </div>

              {/* {when menu button gets clicked ends here} */}

              {/* mobile view ends  */}
            </>
         
        </div>
      </div>
    </>
  );
};

export default Navbar;
