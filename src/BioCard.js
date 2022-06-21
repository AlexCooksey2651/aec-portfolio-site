import React from 'react'
import { Card, Container } from 'react-bootstrap'

const BioCard = ({ card }) => {
    return (
        <Card className="bio-card">
            <Container>
                <img src={card.image} alt="card-image" />
            </Container>
            <p>{card.text}</p>
        </Card>
    )
}

export default BioCard