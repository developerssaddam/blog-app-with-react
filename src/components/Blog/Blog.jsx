import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";
const Blog = ({ blog, handlemarkAsRead, handleReadingTime }) => {
  const {
    title,
    cover,
    author,
    author_img,
    post_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-3 border-b-2 mb-10">
      <img
        className="cover_photo w-full max-h-[450px] object-cover rounded-lg"
        src={cover}
        alt=""
      />
      <div className=" flex justify-between">
        <div className="author_info flex items-center gap-3">
          <img
            className="author_img w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border border-gray-700"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="author_name text-lg md:text-2xl font-bold">
              {author}
            </h3>
            <p className="post_time text-xs md:text-base font-medium">
              {post_date}
            </p>
          </div>
        </div>

        <button
          onClick={() => handlemarkAsRead(blog)}
          className="reading_time flex gap-2 items-center"
        >
          <span>{reading_time}</span>
          <CiBookmark />
        </button>
      </div>
      <h2 className="title text-2xl md:text-4xl font-bold">{title}</h2>
      <div className="hastags flex gap-3">
        {hashtags.map((item, index) => (
          <a className="cursor-pointer" href="#" key={index}>
            #{item}
          </a>
        ))}
      </div>
      <button
        onClick={() => handleReadingTime(reading_time)}
        className="text-[#6047EC] underline pb-3"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handlemarkAsRead: PropTypes.func,
  handleReadingTime: PropTypes.func,
};

export default Blog;
