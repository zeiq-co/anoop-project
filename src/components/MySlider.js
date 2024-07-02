import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MySlider() {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="w-full h-96 bg-cyan-200">
        <h3 className="text-center">my first slide</h3>
      </div>
      <div className="w-full h-96 bg-purple-200">
        <h3 className="text-center">my second slide</h3>
      </div>
      <div className="w-full h-96 bg-yellow-200">
        <h3 className="text-center">my third slide</h3>
      </div>
    </Slider>
  )
}