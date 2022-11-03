import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div>
      <nav
        className="flex justify-between items-center h-16 bg-[#1b1b1b] text-white relative shadow-sm font-mono"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          Github Repos
        </Link>
        <div className="px-4 cursor-pointer md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <a href="/about" className="p-4">
            About
          </a>
          <a href="/contact" className="p-4">
            Docs
          </a>
          {/* contact button */}
          <button>
            <a href="/contact" className="p-4">
              Contact
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default navBar;
