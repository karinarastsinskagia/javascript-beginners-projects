import {createRoot} from 'react-dom/client'
import {createElement} from 'react'
import {Fragment} from 'react' //it does not add unnecessary nested html elements
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(<App/>)

