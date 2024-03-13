import "./Blogs.css";
import Blog from "../Blog/Blog";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Blogs = ({ handlemarkAsRead, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../db/db.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

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
  handlemarkAsRead: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blogs;
