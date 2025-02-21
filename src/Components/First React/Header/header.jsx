
import Main from '../Main Content/main'
import './header.css'

const Navbar = ()=> {
    return(
        <div>
            <div className="navbar">
                <ul>
                    <li><a href="https://markmanson.net/"> MARK MANSON</a></li>
                    <li>Articles</li>
                    <li>Books</li>
                    <li>Courses</li>
                    <li>Newsletter</li>
                    <li>Podcast</li>
                </ul>
            </div>
            <Main/>
        </div>
    )
}

export default Navbar