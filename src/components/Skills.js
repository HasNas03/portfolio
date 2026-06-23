// Skills.js
import React from 'react';

// import reactImage from '../assets/react.png';
import pythonImage from '../assets/python.png'; // Import the images for each skill
// import javascriptImage from '../assets/javascript.png';
// import mongodbImage from '../assets/mongodb.png';
import postgresqlImage from '../assets/postgresql.png';
import gitImage from '../assets/git.png';
import arcgisImage from '../assets/arcgis.png';
import javaImage from '../assets/java.png';
// import tableauImage from '../assets/tableau.png';
// import pandasImage from '../assets/pandas.png';
// import jupyterImage from '../assets/jupyter.png';
import springbootImage from '../assets/springboot.png';
import terraformImage from '../assets/terraform.png';
import dockerImage from '../assets/docker.png';
import awsImage from '../assets/aws.png';
import postmanImage from '../assets/postman.png';
// import codeImage from '../assets/code.png';
import codex from '../assets/codex.svg'
import copilot from '../assets/copilot.jpg'

function Skills() {
    const skillsData = [
        { image: pythonImage, text: 'Python', color: '#2bc8ff' },     
        { image: javaImage, text: 'Java', color: '#ff9d2e' },
        { image: springbootImage, text: 'Spring Boot', color: '#78e64e' },
        { image: postgresqlImage, text: 'PostgreSQL', color: '#3ca7ff'},
        { image: awsImage, text: 'AWS', color: '#16c7ff'},
        { image: terraformImage, text: 'Terraform', color: '#8a5cff'},
        { image: dockerImage, text: 'Docker', color: '#20b7ff'},
        { image: postmanImage, text: 'Postman', color: '#ff65c8' },
        { image: gitImage, text: 'Git', color: '#ff7a2f'},
        { image: arcgisImage, text: 'ArcGIS Pro', color: '#2deda1'},
        { image: codex, text: 'OpenAI Codex', color: '#a47cff'},
        { image: copilot, text: 'Github Copilot', color: '#72e4ff'}
        // { image: mongodbImage, text: 'MongoDB' },
        // { image: tableauImage, text: 'Tableau' },
        // { image: javascriptImage, text: 'JavaScript' },
        // { image: reactImage, text: 'React' },
        // { image: pandasImage, text: 'pandas' },
        
    ];

    
    return (
    <section className='skills'>
        <h1 className="sectiontitle othertitle">Skills</h1>
        {/* <p className='desc desc2'>Here are some of my technical skills</p> */}
        <div className="skill-images-container">
            {skillsData.map((skill, index) => (
                <div 
                    key={index} 
                    className="skill-item"
                    style={{ '--hover-color': skill.color }}
                >
                    <img src={skill.image} alt={skill.text} className="skill-image" />
                    <p className="skill-text">{skill.text}</p>
                </div>
            ))}
        </div>
    </section>
);
}

export default Skills;
// <img src={react} style={{ width: '15%', height: 'auto' }}/>
