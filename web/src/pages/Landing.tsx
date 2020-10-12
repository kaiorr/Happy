import React from 'react';
import '../styles/global.css';
import '../styles/landing.css';
import logo from '../assets/Logo.svg';
import {  FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={logo} alt="Happy"/>
      <main>
        <h1>Leve Felicidade para o mundo</h1>
        <p>Visite orfanatos e mud o dia de muitas crianças!</p>
      </main>

      <div className="location">
        <strong>Goiânia </strong>
        <span>Goiás</span>
      </div>


        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="#333" />
        </Link>

    </div>
  </div>
  )
}
