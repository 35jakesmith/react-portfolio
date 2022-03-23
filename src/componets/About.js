import React from 'react';
import '../assets/style.css'

function About() {
    return (
        <section className='bg-primary'>
            <div className='row'>
                <h1 className='text-center fw-bolder ms-2 text-light col-4'>About Me</h1>
            </div>
            <div className='row'>
                <img src={require('../img/Me.JPG')} alt='pic' className='about-me-pic img-fluid col-4'></img>
                <p className='col text-center text-light fs-1'>My name is Jake and I am on track to becoming a Full-Stack Developer. I am 25 and if im not working, you can find me at the golf course!</p> 
            </div>
        </section>
    );
}

export default About;