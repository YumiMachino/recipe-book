import data from "../../data/MyFavorite";
import Post from "../reusable/Post";

const Favorite = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-10 justify-items-center">
      {data.map((item, index) => (
        <Post
          key={index}
          id={item.id}
          category={item.category}
          name={item.name}
          description={item.description}
        ></Post>
      ))}
    </div>
  );
};

export default Favorite;
