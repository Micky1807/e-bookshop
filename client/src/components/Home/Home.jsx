import { useEffect } from "react";
import MidSlide from "./MidSlide";
import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import {Box,styled} from '@mui/material'
import Slide from "./Slide";
import {getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from "react-redux";
import MidSection from "./MidSection";
const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2
`
const Home = () => {
    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch (getProducts())
}, [dispatch])
 
    return (
        <>
            <NavBar/>
            <Component>
            <Banner/>
            <MidSlide products={products} title='Deal of the Day' timer = {true}/>
            <MidSection/>
            <Slide products={products} title='Discount for you' timer = {false}/>
            <Slide products={products} title='Suggesting items' timer = {false}/>
            <Slide products={products} title='Top Selection' timer = {false}/>
            <Slide products={products} title='Recommended items' timer = {false}/>
            <Slide products={products} title='Trending Offers' timer = {false}/>
            <Slide products={products} title="Season's Top picks" timer = {false}/>
            <Slide products={products} title='Top Deals on Accessories' timer = {false}/>


            </Component>
        </>
    )
}

export default Home;