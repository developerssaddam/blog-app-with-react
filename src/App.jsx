import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [markAsRead, setMarkAsRead] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  // handle mark adread btn.
  const handlemarkAsRead = (blog) => {
    const newMarkAsRead = [...markAsRead, blog];
    setMarkAsRead(newMarkAsRead);
  };

  // handleReadingTime.
  const handleReadingTime = (reading_time) => {
    const getNumber = parseInt(reading_time.split(" ")[0]);
    setReadingTime(readingTime + getNumber);
  };

  return (
    <div className="container mx-auto">
      <header>
        <Header></Header>
      </header>

      <main className="flex flex-col md:flex-row md:gap-8 px-4">
        <Blogs
          handlemarkAsRead={handlemarkAsRead}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks
          markAsRead={markAsRead}
          readingTime={readingTime}
        ></Bookmarks>
      </main>
    </div>
  );
}

export default App;
