import PropTypes from "prop-types";

const Bookmark = ({ markAsRead, readingTime }) => {
  console.log(markAsRead);
  return (
    <div>
      <h2 className="bg-[#EFECFD] border border-[#6047EC] p-3 md:p-4 rounded-lg text-lg text-center md:text-2xl md:text-start text-[#6047EC] font-bold mb-8">
        Spent time on read : <span>{readingTime}</span> min
      </h2>
      <div className="bg-[#F3F3F3] p-3 md:p-8 rounded-lg">
        <h2 className="text-lg md:text-2xl font-bold mb-4">
          Bookmarked Blogs : <span>{markAsRead.length}</span>
        </h2>
        <div>
          {markAsRead.map((item, index) => (
            <h3
              key={index}
              className="bg-white p-3 md:p-5 rounded-lg  md:text-lg font-semibold mb-4"
            >
              {item.title}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  markAsRead: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmark;
