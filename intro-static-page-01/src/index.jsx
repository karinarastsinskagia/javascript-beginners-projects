import {createRoot} from 'react-dom/client'
import {createElement} from 'react'

const root = createRoot(document.getElementById('root'))

//declarative way
function MainContent() {
    return (
        <div>
            <img src="react.svg"/>
            <h1>React is great!</h1>
        </div>

    )
}

root.render(
    <div>
        <MainContent/>
    </div>
)

//imperative way
// let e = document.createElement('h1')
// e.textContent = 'React is great!'
// e.className = 'header'
// document.getElementById('root').appendChild(e)

