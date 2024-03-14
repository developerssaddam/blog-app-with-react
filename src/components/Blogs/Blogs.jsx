import "./Blogs.css";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ blogs, handlemarkAsRead, handleReadingTime }) => {
  return (
    <div className="md:w-2/3 w-full">
      {blogs.map((blog, index) => (
        <Blog
          key={index}
          blog={blog}
          handlemarkAsRead={handlemarkAsRead}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  handlemarkAsRead: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blogs;
