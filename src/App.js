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
                <Link to="/Blog/">
                    <header>./blog</header>
                </Link>
                {/* <Nav /> */}

                <div className="main-container">
                    <Routes>
                        <Route path="/Blog/" element={<Home />} />
                        <Route path="/Blog/post/:id" element={<Post />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
