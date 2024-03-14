import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDataFromLocalStorage, setDataToLocalStorage } from "./utils/utils";

function App() {
  const [markAsRead, setMarkAsRead] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../db/db.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    const lsData = getDataFromLocalStorage();
    const newData = [];
    for (const id of lsData) {
      const savedData = blogs.find((blog) => blog.id === id);
      if (savedData) {
        newData.push(savedData);
      }
    }
    setMarkAsRead(newData);
  }, [blogs]);

  // handle mark adread btn.
  const handlemarkAsRead = (blog) => {
    setDataToLocalStorage(blog.id);
    if (markAsRead.includes(blog)) {
      return toast.warn("Already mark this post!", {
        position: "top-center",
      });
    }
    const newMarkAsRead = [...markAsRead, blog];
    setMarkAsRead(newMarkAsRead);
    toast.success("Successfuly mark as read!");
  };

  // handleReadingTime.
  const handleReadingTime = (reading_time) => {
    const getNumber = parseInt(reading_time.split(" ")[0]);
    setReadingTime(readingTime + getNumber);
    toast.success("Successfuly adding reading time!");
  };

  return (
    <div className="container mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="flex flex-col md:flex-row md:gap-8 px-4">
        <Blogs
          blogs={blogs}
          handlemarkAsRead={handlemarkAsRead}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks
          markAsRead={markAsRead}
          readingTime={readingTime}
        ></Bookmarks>
      </main>
      <ToastContainer />;
    </div>
  );
}

export default App;
