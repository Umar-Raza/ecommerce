import React from 'react'
import { Layout } from "../../components/layout/Layout"
import { HeroSection } from '../../components/heroSection/HeroSection'
import { HomePageProductCard } from '../../components/homePageProductCard/HomePageProductCard'
export const Home = () => {
    return (
        <Layout>
            <HeroSection/>
            <HomePageProductCard/>
        </Layout>
    )
}
