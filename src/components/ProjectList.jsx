import React, { useEffect, useState } from 'react';
import axios from 'axios'

function ProjectList() {

    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        axios.get('http"//localhost:5000/api/projects')
        .then(response => setProjects(response.data))
        .catch( error  => console.error("Error Fetching Projects", error));
    }, []);
    
  return (
    <div>ProjectList</div>
  )
}

export default ProjectList;
