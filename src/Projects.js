import React from 'react'
import { Container, Card } from 'react-bootstrap'

const Projects = () => {
  return (
    <Container id="projects">
        <Card className="project-card">
            <h2>Forever Home</h2>
            <Container>
                <iframe width="420" height="315" src="https://youtube.com/embed/_RoC-rcVuC4"></iframe>
            </Container>
        </Card>
        <Card className="project-card">
            <h2>Stronger Tomorrow</h2>
            <Container>
                <iframe width="420" height="315" src="https://youtube.com/embed/cKEERoxENFY"></iframe>
            </Container>
        </Card>
        <Card className="project-card">
            <h2>Office of the Registrar at Pokemon Academy</h2>
            <br/>
            <Container>
                <iframe width="420" height="315" src="https://youtube.com/embed/VtlTGcPK8cc"></iframe>
            </Container>
        </Card>
    </Container>
  )
}

export default Projects