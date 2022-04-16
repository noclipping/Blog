import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Post from './components/Post'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
    return (
        <Router>
            <div className="root">
                <Link to="/">
                    <header>./blog</header>
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
