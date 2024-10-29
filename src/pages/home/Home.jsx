import React, { useContext } from 'react'
import { Layout } from "../../components/layout/Layout"
import { HeroSection } from '../../components/heroSection/HeroSection'
import { HomePageProductCard } from '../../components/homePageProductCard/HomePageProductCard'
import { Loader } from 'lucide-react'

export const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <HomePageProductCard />
       
        </Layout>
    )
}
