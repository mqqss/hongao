import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/public/images/logo/hongao-logo.png" 
                alt="泓奥科技logo" 
                className="h-8 mr-2 object-contain"
              />
              <span className="text-blue-600 font-bold text-xl">泓奥科技</span>
            </Link>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
               <NavLink 
                to="/" 
                className={({ isActive }) => isActive 
                  ? "border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                }
              >
                首页
              </NavLink>
               <NavLink 
                to="/products" 
                className={({ isActive }) => isActive 
                  ? "border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                }
              >
                产品中心
              </NavLink>
               <NavLink 
                to="/solutions" 
                className={({ isActive }) => isActive 
                  ? "border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                }
              >
                解决方案
              </NavLink>
               <NavLink 
                to="/about" 
                className={({ isActive }) => isActive 
                  ? "border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                }
              >
                关于我们
              </NavLink>
               <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive 
                  ? "border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                }
              >
                联系我们
              </NavLink>
            </nav>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">打开主菜单</span>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               <NavLink
                to="/"
                className={({ isActive }) => isActive 
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" 
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </NavLink>
               <NavLink
                to="/products"
                className={({ isActive }) => isActive 
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" 
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                产品中心
              </NavLink>
               <NavLink
                to="/solutions"
                className={({ isActive }) => isActive 
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" 
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                解决方案
              </NavLink>
               <NavLink
                to="/about"
                className={({ isActive }) => isActive 
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" 
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                关于我们
              </NavLink>
               <NavLink
                to="/contact"
                className={({ isActive }) => isActive 
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" 
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                联系我们
              </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;