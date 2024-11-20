import React from "react";

function Experience() {
    return (
        <div>
            <h1>Work Experience</h1>
            <section className='experienceCard'>
                <h3>Sandtech | Software Engineer Intern</h3>
                <h4>Johannesburg & Remote, Gauteng</h4>
                <h4>March 2024 - May 2024</h4>
                <p>
                    Front-end development, specializing in UI/UX design and development
                    for C# & ASP.NET Core API, MAUI applications.
                    Proficient in Azure DevOps tools, encompassing version control, CI/CD
                    pipelines, and release management.
                    Troubleshooting, debugging, maintaining and improving code base.
                </p>
            </section>
            <section className='experienceCard'>
                <h3>Curro Holdings | IT Systems Administrator</h3>
                <h4>Edenvale, Gauteng</h4>
                <h4>August 2023 - Current</h4>
                <p>
                    Administrative support of Microsoft Azure, Active Directory,
                    Organizational Unit.
                    VMware Workstation - Cloud computing leveraging remote Server, PC
                    access, optimizing data and management.
                </p>
            </section>
        </div>
    )
}

export default Experience;
