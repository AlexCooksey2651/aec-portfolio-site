import React, { useState } from 'react'
import { Container, Carousel, Button } from 'react-bootstrap'
import BioCard from './BioCard'

const bioCards = [
    {id: 1, text: "I'm from Colorado and grew up in Highlands Ranch, a suburb south of Denver. My family now lives in Palm Beach Gardens, Florida. I've lived in/near NYC for 10 years now, but still like the feeling of the suburbs. As amazing as New York is, I'd still like to have a yard, a garden, and a garage...and a home gym to fill up that garage!"}, 
    {id: 2, text: "Steve Irwin was (and still is) a hero of mine. I've always loved animals - some favorites are snakes, sharks, and penguins, but really I love most anything with a heartbeat. If you go on a walk with me, please don't get offended if I get distracted; it's probably because I saw a bird or squirrel."},
    {id: 3, text: "On a related note, I wanted to be a zoologist of some sort when I was young. Later, I thought I might play piano professionally. In college, I planned to major in chemistry or math, and instead chose East Asian Studies with a concentration on China. If I could go back, I might have chosen philosophy. I left college and spent 10 years as a personal trainer, and now am transitioning to software engineering. Life is full of surprises; having the opportunity to let my curiosity guide me to new adventures like this is one of the best surprises possible."},
    {id: 4, text: "I began playing piano at 7 years old and got competitive around 5th or 6th grade. I pretentiously only listened to classical music for a few years in elementary school because <em>I was just that cool.</em> Just like now. I have perfect pitch, but don't ask me to sing. You won't like the results."},
    {id: 5, text: "Taekwondo was my only real sport growing up. My dad was my main teacher, and my mom and sister also trained when I was young - kind of cool to have a family full of black belts! That said, I wouldn't put any money on any of us in a fight (except maybe my dad)."},
    {id: 6, text: "I might come off as overly serious or formal, perhaps a bit guarded. I'm a little in my head sometimes, but I also just have a hard time showing my goofy side. Ironically, my partner Jenny says my silliness is one of my best qualities. My humor isn't very clever, but I seem to make her laugh with general inanity and physical comedy. Robin William and Jim Carrey always crack me up - silly with a dash of crazy."},
    {id: 7, text: "I love cooking and eating food from around the world! Some personal favorites include lamb chops, ramen (nothing against instant, but I mean the legit stuff), and all different sorts of curries. Push come to shove, Jamaican might be a favorite...I don't know how much better it gets than curry goat. I could happily live off of Chonqing Xiao Mian, street noodles in the city where Jenny and her family are from. Oh, and peanut butter. Peanut butter is life."},
    {id: 8, text: `I do enjoy working out, but not <em>that much</em>. A lot of the time I'd just assume plop on the couch and watch reruns of The Office (again). That said, I find it to be wonderful stress relief. Deadlifting is therapy. By the way, I'm gonna drop a plug for the gym I'm working out at these days, Ironbound Performance Athletics. I joined because I heard they had cultivated a great community, and that's absolutely been the case. I'm hoping to coach there a little bit here and there, so come drop by and say hello if you're in the area!`},
    {id: 9, text: "I still like playing the Gen 1 & Gen 2 Pokemon video games. Pokemon Yellow Version was the first video game I ever owned and I don't think I'll be getting rid of it any time soon. Again, I'm a really cool 32-year old."},
    {id: 10, text: "Among the countless things I have to be grateful for in this life, none matters more than the love of my life, Jenny Liu. Besides being a total boss, she's as kind and authentic a person as you're likely to meet in this world. We live in Jersey City, NJ with our easy-going cat, Piglet. You wouldn't think it possible, but I think he likes eating even more than we do."}
]

const Bio = () => {
    const [displayed, setDisplayed] = useState(1)

    const slides = bioCards.map(card => {
        return <BioCard key={card.id} id={card.id} card={card}/>
    })
    
    function nextSlide() {
        if (displayed === 10) {
            setDisplayed(1)
        } else {
            setDisplayed(displayed + 1)
        }
    }
    
    function previousSlide() {
        if (displayed === 1) {
            setDisplayed(10)
        } else {
            setDisplayed(displayed - 1)
        }
    }

    const displayedSlide = slides.filter(slide => parseInt(slide.key) === displayed)
    const buttons = slides.map(slide => {
        return <Button onClick={(() => setDisplayed(parseInt(slide.key)))}>{slide.key}</Button>
    })
    
    return (
        <Container id='bio' fluid="md">
            <p>Hey there! Just thought I'd take a moment to introduce myself. Let's start with the basics:</p>
            <div>
                {displayedSlide}
            </div>
            <Button onClick={() => previousSlide()}>PREVIOUS</Button>
            {buttons}
            <Button onClick={() => nextSlide()}>NEXT</Button>
            
        </Container>
        
    )
}

export default Bio