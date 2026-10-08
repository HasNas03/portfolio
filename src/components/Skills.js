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
        { image: pythonImage, text: 'Python', color: '#83bdc3' },
        { image: javaImage, text: 'Java', color: '#eead78' },
        { image: springbootImage, text: 'Spring Boot', color: '#99bd8d' },
        { image: postgresqlImage, text: 'PostgreSQL', color: '#8ea9d5'},
        { image: awsImage, text: 'AWS', color: '#e7ca72'},
        { image: terraformImage, text: 'Terraform', color: '#b39bcf'},
        { image: dockerImage, text: 'Docker', color: '#83bdc3'},
        { image: postmanImage, text: 'Postman', color: '#dc96aa' },
        { image: gitImage, text: 'Git', color: '#e78f8f'},
        { image: arcgisImage, text: 'ArcGIS Pro', color: '#99bd8d'},
        { image: codex, text: 'OpenAI Codex', color: '#b39bcf'},
        { image: copilot, text: 'Github Copilot', color: '#8ea9d5'}
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
