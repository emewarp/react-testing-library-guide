import React from 'react'

import { Link, Route, Switch,  useParams } from 'react-router-dom'

const About = () => <h1>About page</h1>

const Home = () => <h1>Home page</h1>

const Contact = () => {
  console.log('estamos aqui o no?')
 const { name } = useParams()

 return <h1 data-testid="contact-name">{name}</h1>
}

const TestRouter = () => {
    const name = 'Martina'
    return (
    <>
    <nav data-testid="navbar">
      <Link data-testid="home-link" to="/">Home</Link>
      <Link data-testid="about-link" to="/about">About</Link>
      <Link data-testid="contact-link" to={`/contact/${name}`}>Contact</Link>
    </nav>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact/:name" component={Contact} />
      </Switch>
    </>
  )
}

export default TestRouter