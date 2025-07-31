import {Fragment} from "react";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

function BaseContent() {
    return (
        <Fragment>
            <Header/>
            <h1>Fun facts about React!</h1>
            <ul className="main">
                <li className="main-list">Was first release in 2013</li>
                <li className="main-list">Was originally created by Jordan Walke</li>
                <li className="main-list">Has well over 200K stars on GitHub</li>
                <li className="main-list">Is maintained by Meta</li>
                <li className="main-list">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </Fragment>
    )
}
function PageComponent() {
    return (
        <>
            <MainContent/>
            <Footer/>
        </>

    )
}
export default function App()
{
    return <div>
        <BaseContent/>
        <PageComponent/>
    </div>
}