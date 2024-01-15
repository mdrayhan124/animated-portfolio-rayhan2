import Slider from "react-slick"
import { comments } from "@/utils/data";
import css from './slider.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliderp = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        touchMove: true,
        useCSS: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 685,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className={`yPaddings ${css.comments}`}>
            <Slider {...settings}>
                {
                    comments.map((comment, i) => {
                        return <div className={css.comment} key={i}>
                            <img src={comment.img} />
                            <p>{comment.comment}</p>

                            <div className={css.line}></div>

                            <div className={css.bio}>
                                <span>{comment.name}</span>
                                <span>{comment.post}</span>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
    )
}

export default Sliderp