import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecommendedCarsList from '../recommendedCars/RecommendedCarsList';
import axios from 'axios';// import your RecommendedCarsList component

const CarouselComponent = () => {
    const [car, setCar] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8800/auth/admin/vehicleList")
            .then((res => {
                console.log(res, "this is the response")

                setCar(res.data);
            }))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='grid grid-cols-1 items-center  '>
            <Slider {...settings} className=''>
                {car &&
                    car.map((carItem, index) => (
                        <div key={index} className='ps-20'>
                            <RecommendedCarsList car={carItem} />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default CarouselComponent;
