import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Items></Items>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;