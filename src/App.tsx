import React from 'react'
import { Link, Router, RouteComponentProps } from '@reach/router'
import { ComponentClassExample, HooksExample } from './examples'
import './App.css'

const BASE_PATH = 'hooked-on-context'
const withBasePath = (path: string) => `/${BASE_PATH}/${path}`

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Link to={withBasePath('component-class')}>Component Class Example</Link>
          <Link to={withBasePath('hooks')}>Hooks Example</Link>
        </nav>
      </header>
      <main>
        <Router basepath={BASE_PATH}>
          <Home default />
          <ComponentClassExample path="component-class" />
          <HooksExample path="hooks" />
        </Router>
      </main>
    </>
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
