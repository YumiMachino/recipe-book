export type CategoryType = {
  title: string;
  image: string;
};

const Category: React.FC<CategoryType> = ({ title, image }) => {
  return (
    <div className="relative w-48 h-48">
      <img className="m-0 object-cover" src={image}/>
      <p className="font-main text-white absolute bottom-0 right-2 whitespace-pre-wrap font-semibold text-2xl text-center">
        {title}
      </p>
    </div>
  );
};

export default Category;
