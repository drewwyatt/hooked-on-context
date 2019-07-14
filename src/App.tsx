import React from 'react'
import { Link, Router, RouteComponentProps } from '@reach/router'
import { ComponentClassExample, HooksExample } from './examples'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <Link to="component-class">Component Class Example</Link>
        <Link to="hooks">Hooks Example</Link>
      </nav>
      <Router>
        <Home default />
        <ComponentClassExample path="component-class" />
        <HooksExample path="hooks" />
      </Router>
    </div>
  )
}

const Home: React.FC<RouteComponentProps> = () => (
  <h1>
    <span role="img" aria-label="wave">
      👋
    </span>
  </h1>
)

export default App
