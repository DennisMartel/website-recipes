import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import AutoComplete from "../../AutoComplete/AutoComplete";

const Header = ({ autoCompleteData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-40">
      <nav role="navigation" className="bg-white shadow-md xl:block hidden">
        <div className="myContainer px-6 py-2 xl:py-0">
          <div className="flex items-center justify-between">
            <Logo />
            {/* <div className="flex">
              <div className="hidden xl:flex md:mr-6 xl:mr-16">
                <Link to='/' className="px-5 py-7 text-lg leading-5 text-black font-semibold hover:bg-gray-100 transition duration-150 ease-in-out">
                  Recetario
                </Link>
                <Link to='/' className="px-5 py-7 text-lg leading-5 text-black font-semibold hover:bg-gray-100 transition duration-150 ease-in-out">
                  Nueva receta
                </Link>
                <Link to='/' className="px-5 py-7 text-lg leading-5 text-black font-semibold hover:bg-gray-100 transition duration-150 ease-in-out">
                  Gestionar recetas
                </Link>
              </div>
              <div className="hidden xl:flex items-center">
                <div className="ml-6 relative">
                  <button aria-label="dropdown" className="focus:outline-none border-b-2 border-transparent focus:border-indigo-700 py-3  focus:text-indigo-700 text-gray-600 hover:text-indigo-700 flex items-center relative" onclick="dropdownHandler(this)">
                    {isOpen ? (
                      <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16">
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <a href="" className="focus:underline focus:text-indigo-700 focus:outline-none flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx="12" cy="7" r="4" />
                              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <span className="ml-2">My Profile</span>
                          </a>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                          <a href="javascript:void(0)" className="focus:underline focus:text-indigo-700 focus:outline-none flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx="12" cy="12" r="9" />
                              <line x1="12" y1="17" x2="12" y2="17.01" />
                              <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>
                            <span className="ml-2">Help Center</span>
                          </a>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                          <a href="javascript:void(0)" className="focus:underline focus:text-indigo-700 focus:outline-none flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span className="ml-2">Account Settings</span>
                          </a>
                        </li>
                      </ul>
                    ) : null}
                    <div className="cursor-pointer flex text-sm rounded-full">
                      <img onClick={() => setIsOpen(!isOpen)} className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png" alt="logo" />
                    </div>
                  </button>
                </div>
              </div>
            </div> */}
            <AutoComplete
              suggestions={autoCompleteData}
            />
          </div>
        </div>
      </nav>
      <nav className="bg-white shadow-md">
        <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white sticky top-0 z-50">
          <div aria-label="logo" role="img" tabIndex="0">
            <div className="flex items-center rounded-full border-2 border-rose-400 p-1">
              <img src={require('../../../assets/images/chef-hat.png')} alt="Logo" width={50} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header