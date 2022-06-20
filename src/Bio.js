import React from 'react'
import { Container, Carousel } from 'react-bootstrap'

const Bio = () => {
    return (
        // <Container id='home' fluid="md">
        //     <p>Hey there! Just thought I'd take a moment to introduce myself. Let's start with the basics:</p>
        //     <ul>
        //         <li>I'm from Colorado and grew up in Highlands Ranch, a suburb south of Denver. My family now lives in Palm Beach Gardens, Florida. I've lived in/near NYC for 10 years now, but still like the feeling of the suburbs. As amazing as New York is, I'd still like to have a yard, a garden, and a garage...and a home gym to fill up that garage!</li>
        //         <li>Steve Irwin was (and still is) a hero of mine. I've always loved animals - some favorites are snakes, sharks, and penguins, but really I love most anything with a heartbeat. If you go on a walk with me, please don't get offended if I get distracted; it's probably because I saw a bird or squirrel.</li>
        //         <li>On a related note, I wanted to be a zoologist of some sort when I was young. Later, I thought I might play piano professionally. In college, I planned to major in chemistry or math, and instead chose East Asian Studies with a concentration on China. If I could go back, I might have chosen philosophy. I left college and spent 10 years as a personal trainer, and now am transitioning to software engineering. Life is full of surprises; having the opportunity to let my curiosity guide me to new adventures like this is one of the best surprises possible.</li>
        //         <li>I began playing piano at 7 years old and got competitive around 5th or 6th grade. I pretentiously only listened to classical music for a few years in elementary school because <em>I was just that cool.</em> Just like now. I have perfect pitch, but don't ask me to sing. You won't like the results.</li>
        //         <li>Taekwondo was my only real sport growing up. My dad was my main teacher, and my mom and sister also trained when I was young - kind of cool to have a family full of black belts! That said, I wouldn't put any money on any of us in a fight (except maybe my dad).</li>
        //         <li>I might come off as overly serious or formal, perhaps a bit guarded. I'm a little in my head sometimes, but I also just have a hard time showing my goofy side. Ironically, my partner Jenny says my silliness is one of my best qualities. My humor isn't very clever, but I seem to make her laugh with general inanity and physical comedy. Robin William and Jim Carrey always crack me up - silly with a dash of crazy.</li>
        //         <li>I love cooking and eating food from around the world! Some personal favorites include lamb chops, ramen (nothing against instant, but I mean the legit stuff), and all different sorts of curries. Push come to shove, Jamaican might be a favorite...I don't know how much better it gets than curry goat. I could happily live off of Chonqing Xiao Mian, street noodles in the city where Jenny and her family are from. Oh, and peanut butter. Peanut butter is life.</li>
        //         <li>I do enjoy working out, but not <em>that much</em>. A lot of the time I'd just assume plop on the couch and watch reruns of <em>The Office</em> (again). That said, I find it to be wonderful stress relief. Deadlifting is therapy. By the way, I'm gonna drop a plug for the gym I'm working out at these days, <a href="https://www.ironboundperformance.com/">Ironbound Performance Athletics</a>. I joined because I heard they had cultivated a great community, and that's absolutely been the case. I'm hoping to coach there a little bit here and there, so come drop by and say hello if you're in the area!</li>
        //         <li>I still like playing the Gen 1 & Gen 2 Pokemon video games. Pokemon Yellow Version was the first video game I ever owned and I don't think I'll be getting rid of it any time soon. Again, I'm a really cool 32-year old.</li>
        //         <li>Among the countless things I have to be grateful for in this life, none matters more than the love of my life, Jenny Liu. Besides being a total boss, she's as kind and authentic a person as you're likely to meet in this world. We live in Jersey City, NJ with our easy-going cat, Piglet. You wouldn't think it possible, but I think he likes eating even more than we do.</li>
        //     </ul>
        // </Container>
        <Container>
            <Carousel>
                <Carousel.Item>
                    <Container>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsjVXLREdHVZAAOTyHHJah--chSIFgkogow&usqp=CAU"
                            alt="First slide"
                        />
                    </Container>
                    <br />
                    
                    <Container>
                        <Carousel.Caption>
                            <Container className="slide-container">
                                <p>I'm from Colorado and grew up in Highlands Ranch, a suburb south of Denver. My family now lives in Palm Beach Gardens, Florida. I've lived in/near NYC for 10 years now, but still like the feeling of the suburbs. As amazing as New York is, I'd still like to have a yard, a garden, and a garage...and a home gym to fill up that garage!</p>
                            </Container>
                        </Carousel.Caption>
                    </Container>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.makeameme.org/created/omg-its-shdvto.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Container className="slide-container">
                            <p>Steve Irwin was (and still is) a hero of mine. I've always loved animals - some favorites are snakes, sharks, and penguins, but really I love most anything with a heartbeat. If you go on a walk with me, please don't get offended if I get distracted; it's probably because I saw a bird or squirrel.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/20954029_10156600323559638_443434112262124430_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=CaighmGL7SYAX_BGVQ_&tn=8AKWQBU8_5PNhMq_&_nc_ht=scontent-lga3-1.xx&oh=00_AT90hUaJ0YopezpRk-BVALYKXb9bTE30RS0sB7wrHE6Iow&oe=62D5CDC9"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Container className="slide-container">
                            <p>On a related note, I wanted to be a zoologist of some sort when I was young. Later, I thought I might play piano professionally. In college, I planned to major in chemistry or math, and instead chose East Asian Studies with a concentration on China. If I could go back, I might have chosen philosophy. I left college and spent 10 years as a personal trainer, and now am transitioning to software engineering. Life is full of surprises; having the opportunity to let my curiosity guide me to new adventures like this is one of the best surprises possible.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsjVXLREdHVZAAOTyHHJah--chSIFgkogow&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Container className="slide-container">
                            <p>I began playing piano at 7 years old and got competitive around 5th or 6th grade. I pretentiously only listened to classical music for a few years in elementary school because <em>I was just that cool.</em> Just like now. I have perfect pitch, but don't ask me to sing. You won't like the results.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsjVXLREdHVZAAOTyHHJah--chSIFgkogow&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Container className="slide-container">
                            <p>Taekwondo was my only real sport growing up. My dad was my main teacher, and my mom and sister also trained when I was young - kind of cool to have a family full of black belts! That said, I wouldn't put any money on any of us in a fight (except maybe my dad).</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsjVXLREdHVZAAOTyHHJah--chSIFgkogow&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Container className="slide-container">
                            <p>I might come off as overly serious or formal, perhaps a bit guarded. I'm a little in my head sometimes, but I also just have a hard time showing my goofy side. Ironically, my partner Jenny says my silliness is one of my best qualities. My humor isn't very clever, but I seem to make her laugh with general inanity and physical comedy. Robin William and Jim Carrey always crack me up - silly with a dash of crazy.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsjVXLREdHVZAAOTyHHJah--chSIFgkogow&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Container className="slide-container">
                            <p>I love cooking and eating food from around the world! Some personal favorites include lamb chops, ramen (nothing against instant, but I mean the legit stuff), and all different sorts of curries. Push come to shove, Jamaican might be a favorite...I don't know how much better it gets than curry goat. I could happily live off of Chonqing Xiao Mian, street noodles in the city where Jenny and her family are from. Oh, and peanut butter. Peanut butter is life.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsjVXLREdHVZAAOTyHHJah--chSIFgkogow&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Container className="slide-container">
                            <p>I still like playing the Gen 1 & Gen 2 Pokemon video games. Pokemon Yellow Version was the first video game I ever owned and I don't think I'll be getting rid of it any time soon. Again, I'm a really cool 32-year old.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsjVXLREdHVZAAOTyHHJah--chSIFgkogow&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Container className="slide-container">
                            <p>Among the countless things I have to be grateful for in this life, none matters more than the love of my life, Jenny Liu. Besides being a total boss, she's as kind and authentic a person as you're likely to meet in this world. We live in Jersey City, NJ with our easy-going cat, Piglet. You wouldn't think it possible, but I think he likes eating even more than we do.</p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Bio