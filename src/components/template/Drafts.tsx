import Slider from "react-slick";
import data from "../../data/DraftData";
import Button from "../reusable/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Drafts = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="mx-12 my-16">
      <Slider {...settings}>
        {data.map((item, index) => (
          <>
            <div className="flex">
              <img width={100} height={100} src={item.image} />
              <div>
                <p>{item.title}</p>
                <Button isPrimary={false} content="Edit" link="/">
                  Edit
                </Button>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Drafts;
