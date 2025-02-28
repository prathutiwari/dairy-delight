import React from 'react'
import CompanyInfo from './CompanyInfo'
import OffersCard from './OffersCard'
import HeroBanner from './HeroBanner'
import Categories from './Categories'
import Partners from './Partners'

const Body = () => {
     return (
          <div>
               <HeroBanner />
               <Categories />
               <OffersCard />
               <Partners />
               <CompanyInfo />
          </div>
     )
}

export default Body