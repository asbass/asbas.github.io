import React from 'react'
import NavBar from '../components/NavBar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div><NavBar/><HeroImg2 heading="CONTACT." text="Lets have a chat"/>
    <Form/>
    <Footer/></div>
  )
}

export default Contact