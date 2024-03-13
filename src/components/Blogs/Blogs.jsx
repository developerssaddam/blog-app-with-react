import "./Blogs.css";
import Blog from "../Blog/Blog";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../db/db.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 w-full">
      {blogs.map((blog, index) => (
        <Blog key={index} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
