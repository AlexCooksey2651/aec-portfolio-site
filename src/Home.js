import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container id='home'>
            <Container id='home-text' fluid="md">
                <p>Hi everyone, my name is Alex Cooksey. Welcome to my portfolio!</p>

                <p>I'm a full-stack software engineer and recently graduated from the Flatiron School software engineering program. For the past 10 years, I've relished the opportunity to help people improve their health and well-being as a personal trainer and nutrition coach. Coaching, for me, presents a complex yet utterly rewarding challenge to apply the best possible understanding of health sciences while honoring the need to make behavior change practical and sustainable for real people.</p>

                <p>Late in 2021, I realized I wanted to make a bigger impact and decided to pivot into software engineering. Not unlike coaching, coding demands that I think about how to write and organize code in a way that optimizes performance while delivering an exceptional user experience. I am thrilled to enter an industry that values lifelong learning and in which the work I do can solve massive problems in innovative ways.</p>

                <p>Head over to the Projects page to check out a couple of the applications I built during my time at Flatiron School, or - if you feel inclined to learn some other random things about me - feel free to click on Bio instead. Want to connect? Head over to Contact and reach out, I'll look forward to hearing from you!</p>
            </Container>
        </Container>
    )
}

export default Home