import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ markAsRead, readingTime }) => {
  return (
    <div className="w-full md:w-1/3">
      <Bookmark markAsRead={markAsRead} readingTime={readingTime}></Bookmark>
    </div>
  );
};

Bookmarks.propTypes = {
  markAsRead: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
