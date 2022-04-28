import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Post from './components/Post'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
let intervId
let cursorOn = true
function App() {
    return (
        <Router>
            <div className="root">
                <Link to="/">
                    <header
                        onMouseEnter={() => {
                            if (!intervId) {
                                intervId = setInterval(() => {
                                    let header =
                                        document.querySelector('header')
                                    if (cursorOn) {
                                        header.style.borderRight =
                                            'solid 2px white'
                                        cursorOn = !cursorOn
                                        return
                                    }
                                    if (!cursorOn) {
                                        header.style.borderRight =
                                            'solid 2px rgba(0,0,0,0)'
                                        cursorOn = !cursorOn
                                    }
                                }, 400)
                            }
                        }}
                        onMouseLeave={() => {
                            clearInterval(intervId)

                            let header = document.querySelector('header')
                            intervId = null
                            header.style.borderRight = ''
                        }}
                    >
                        <span>./blog</span>
                    </header>
                </Link>
                {/* <Nav /> */}

                <div className="main-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/:id" element={<Post />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
