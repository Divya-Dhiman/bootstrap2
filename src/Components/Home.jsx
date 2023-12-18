import React from 'react'
import Navbar from './Navbar';
import PatternSquare from './PatternSquare';
import PageHeader from './PageHeader';
import Image from './Image';
import Benifits from './Benifits';
import Position from './Position';
import Footer from './Footer';


function Home() {
  return (
    <div>
      <Navbar/>
      <PatternSquare/>
      <PageHeader/>
      <Image/>
      <Benifits/>
      <Position/>
      <Footer/>
    </div>
  )
}

export default Home;
