import React from 'react'
import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Carousel from '../../components/Carousel/Carousel'

const Home = () => {

  const[category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Carousel/>
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
