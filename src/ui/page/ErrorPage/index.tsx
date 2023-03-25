import { Link } from "react-router-dom";
import TopNavBar from "../../component/TopNavBar";
import './style.css'

export default function ErrorPage() {
    return (
        <div>
            <TopNavBar/>
            <div className={"error-box"}>
            <h1>Oops! We can't find the page you are looking for.</h1>
            <p>Here are some helpful links instead:</p>
            <Link to='/'>Homepage</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}