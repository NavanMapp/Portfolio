import React from "react";

function Projects({title, description, image}) {
    return (
        <div className="">
            <h1>Projects</h1>
            <section className="experienceCard">
                { image && <img src={image} alt={title} className="card-image" /> }
                <h2 className="card-title" >
                    {title  }
                    Mapp Supreme Website
                </h2>
                <h3>Ticket logging system for a local IT company.</h3>
                <a href="https://mappsupreme-50938.web.app/" 
                className="App-link" target="_blank"
                rel="noopener noreferrer"
                >
                    Project Link
                </a>
                <ul>
                    <a>React</a>
                    <a>Javascript</a>
                    <a>CSS</a>
                    <a>Firebase</a>
                </ul>
            </section>
            <section className="experienceCard">
                <h2>
                    <img className="" />
                    Price Compare API
                </h2>
                <h3>Application that compares store products to others.</h3>
                <ul>
                    <a>C#, ASP.Net Core Web API</a>
                    <a>React</a>
                    <a>Material UI</a>
                    <a>MySQL</a>
                </ul>
            </section>
        </div>
    )
}

export default Projects;
