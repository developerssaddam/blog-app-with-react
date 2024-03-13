import { CiBookmark } from "react-icons/ci";
const Blog = () => {
  return (
    <div className="space-y-3 border-b-2 mb-10">
      <img
        className="cover_photo w-full max-h-[450px] object-cover rounded-lg"
        src="https://i.ibb.co/bgSR4V4/stars-2643089-640.jpg"
        alt=""
      />
      <div className=" flex justify-between">
        <div className="author_info flex items-center gap-3">
          <img
            className="author_img w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border border-gray-700"
            src="https://i.ibb.co/bgSR4V4/stars-2643089-640.jpg"
            alt=""
          />
          <div>
            <h3 className="author_name text-lg md:text-2xl font-bold">Mr. Raju</h3>
            <p className="post_time text-xs md:text-base font-medium">
              Mar 14 (4 Days ago)
            </p>
          </div>
        </div>

        <button className="reading_time flex gap-2 items-center">
          <span>05 min read</span>
          <CiBookmark />
        </button>
      </div>
      <h2 className="title text-2xl md:text-4xl font-bold">
        How to get your first job as a self-taught programmer
      </h2>
      <div className="hastags flex gap-3">
        <p>#endregion</p>
        <p>#endregion</p>
      </div>
      <button className="text-[#6047EC] underline pb-3">Mark as read</button>
    </div>
  );
};

export default Blog;
