import React from "react"
import reactImg from "../Images/react.png"
import jsImg from "../Images/js.png"
import cssImg from "../Images/css.png"
import firebaseImg from "../Images/database.png"
import htmlImg from "../Images/html.png"
import csharpImg from "../Images/csharp.png"
import mysqlImg from "../Images/mysql.png"
import uiImg from "../Images/ui.png"

/****  TODO: Design project cards that will resemble social media posts, 
    *  where a user viewing the projects is able to add a POST card that 
    *  suggests a project the author can build, or perhaps advice from experts on
    *  how they can make the portfolio look better
    */

function Projects({ title, description, image, refProp }) {
    return (
        <div className="project-section" >
            <h1>Projects</h1>
            <div className="project-info">
                <div>
                    <section className="experience-card">
                        {image && <img src={image} alt={title} className="card-image" />}
                        <h2 className="card-title" >
                            {title}
                            Mapp Supreme Website
                        </h2>
                        <h3>Ticket logging system for a local IT company.</h3>
                        <a href="https://mappsupreme-50938.web.app/" className="App-link" target="_blank"
                            rel="noopener noreferrer"
                        >
                            Project Link
                        </a>
                        <div className="stack">Stack</div>
                        <ul className="" >
                            <a href="https://www.javascript.com/">
                                <img src={jsImg} alt="Javascript" className="icon" />Javascript
                            </a>                        <a href="https://react.dev/">
                                <img src={reactImg} alt="React" className="icon" />React
                            </a>

                            <a href="https://html.com" >
                                <img src={htmlImg} alt="HTML" className="icon" />HTML
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" >
                                <img src={cssImg} alt="CSS" className="icon" />CSS
                            </a>
                            <a href="https://firebase.google.com/" >
                                <img src={firebaseImg} alt="Firebase" className="icon" />Firebase
                            </a>
                        </ul>
                    </section>
                    <section className="experience-card">
                        <h2>
                            <img className="" />
                            Price Compare API
                        </h2>
                        <h3>Application that compares store products to others.</h3>
                        <a href="" className="App-link" target="_blank" rel="noopener noreferrer">
                            Project Link
                        </a>
                        <div className="stack">Stack</div>
                        <ul>
                            <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
                                <img src={csharpImg} alt="C#, ASP.Net Core Web API" className="icon" />ASP.Net
                            </a>
                            <a href="https://react.dev/">
                                <img src={reactImg} alt="React" className="icon" />React
                            </a>
                            <a href="https://mui.com" >
                                <img src={uiImg} alt="Material UI" className="icon" />Material UI
                            </a>
                            <a href="https://mysql.com" >
                                <img src={mysqlImg} alt="MySQL" className="icon" />MySQL
                            </a>
                        </ul>
                    </section>
                </div>

            </div>

        </div>
    )
}

export default Projects;
