import React from 'react';
import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';
import banner3 from '../../img/banner3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className=''>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner ">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={banner3} class="d-block w-100  banner-height" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption-position">
                            <h2 className="font-style">BEAUTY ____That Impress____</h2>
                            <p>Enhance your beauty with our jewellery that is both spectacular and affordable.</p>
                            <button className="btn btn-color2">Explore</button>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={banner2} class="d-block w-100  banner-height" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption-position text-light">
                            <h2 className="">JEWELLERY ___That You'll Love___</h2>
                            <p>We provide at Olimp,you will surely find even the rarest jewellery.</p>
                            <button className=" btn btn-color2">Explore</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner1} class="d-block w-100  banner-height" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption-position text-light">
                            <h2 className="font-style">LOVE ___With New Collection___</h2>
                            <p>Your Choice Is Our Best Collection.Purchase The Best jewellery Thats You Love.</p>
                            <button className="btn btn-color2">Explore</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;