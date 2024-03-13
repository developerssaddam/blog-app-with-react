import "./Header.css";
// import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Knowledge Cafe</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header.propTypes = {
//   tabindex: PropTypes.number,
// };

export default Header;
