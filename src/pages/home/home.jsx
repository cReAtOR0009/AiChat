import React from 'react'
import "./home.css"
import { heroImage } from '../../assets'

const Home = () => {
  return (
    <div className='container homeContainer'>
      <div className="left">
        <h1>
          Creators Ai
        </h1>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius obcaecati eaque alias voluptatem molestiae optio?
        </p>
        <button>Get Started</button>
      </div>
      <div className="right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  )
}

export default Home