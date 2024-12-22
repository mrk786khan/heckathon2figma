
import Feauture from "./componets/Singleproduct/feauture"
import Mainsection from "./componets/Singleproduct/mainsetion"
import React from "react"
import Topcategory from "./componets/Singleproduct/topcategory"
import Newstyle from "./componets/Singleproduct/newstyle"
import OurProduct from "./componets/Singleproduct/ourproduct"
import Footer from "./componets/Singleproduct/Footer"

export default function Home() {
  return (
    <div className='m-3'>
      <Mainsection/>
      <Feauture/>
      <Topcategory/>
      <Newstyle/>
      <OurProduct/>
      <Footer/>
    </div>
  )
}
