import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner';
import Products from './Products/Products';
import Partnar from './Partnar/Partnar';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Partnar></Partnar>
            {/* <Review></Review> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;