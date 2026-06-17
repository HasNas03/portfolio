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
        { image: pythonImage, text: 'Python', color: 'rgba(35, 185, 190, 0.4)' },     
        { image: javaImage, text: 'Java', color: 'rgba(208, 115, 28, 0.4)' },
        { image: springbootImage, text: 'Spring Boot', color: 'rgba(65, 226, 20, 0.4)' },
        { image: postgresqlImage, text: 'PostgreSQL', color: 'rgba(19, 125, 206, 0.4)'},
        { image: awsImage, text: 'AWS', color: 'rgba(16, 169, 229, 0.4)'},
        { image: terraformImage, text: 'Terraform', color: 'rgba(90, 15, 228, 0.4)'},
        { image: dockerImage, text: 'Docker', color: 'rgba(108, 108, 108, 0.4)'},
        { image: postmanImage, text: 'Postman', color: 'rgba(183, 12, 217, 0.4)' },
        { image: gitImage, text: 'Git', color: 'rgba(227, 117, 13, 0.4)'},
        { image: arcgisImage, text: 'ArcGIS Pro', color: 'rgba(23, 226, 115, 0.4)'},
        { image: codex, text: 'OpenAI Codex', color: 'rgba(150, 117, 215, 0.4)'},
        { image: copilot, text: 'Github Copilot', color: 'rgba(117, 195, 215, 0.57)'}
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
