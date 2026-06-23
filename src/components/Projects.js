import React from 'react';
import Card from './Card';
import treemap from '../assets/treemap.png';
import boggle from '../assets/boggle.avif';
import site from '../assets/site.jpg';
import tetris2 from '../assets/tetris.webp';
// import todo from '../assets/todo.png';
import houseImage from '../assets/house.jpeg'
import covidImage from '../assets/covid.jpg'
import carImage from '../assets/car.jpg'
import suiteImage from '../assets/suite.jpg'
import comicImage from '../assets/comics.webp'


function Projects() {
  return (
    <section className='projects'>
      <h1 className="sectiontitle othertitle">Projects</h1>
      {/* <p className='desc desc2'>Here are some of my personal projects</p> */}
        <div className='projectList'>
          {/* comic catalog*/}
          <a href='https://github.com/HasNas03/comic-catalog-service' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Comic Catalog ↗" paragraph="Java | Spring Boot | Postman" 
          image={comicImage} bgColor="rgba(152, 5, 5, 0.4)"/>
          </a>
          {/* rekognition*/}
          <a href='https://github.com/HasNas03/rekognition_app' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Face Rekognizer ↗" paragraph="AWS Rekognition, S3, Lambda, DynamoDB" 
          image={suiteImage} bgColor="rgba(98, 16, 142, 0.4)"/>
          </a>
          {/* treemap*/}
          <Card name="FilePath Treemap Visualizer" paragraph="Python | pygame" 
          image={treemap} bgColor="rgba(125, 16, 96, 0.4)"/>
          {/* boggle pro*/}
          <Card name="Boggle Pro" paragraph="Java | JavaFX" 
          image={boggle} bgColor="rgba(119, 49, 14, 0.4)"/>
          {/* tetris*/}
          <Card name="Tetris" paragraph="Java | JavaFX" 
          image={tetris2} bgColor="rgba(16, 153, 141, 0.4)"/>
          {/* site suitability*/}
          <a href='https://github.com/HasNas03/Jupyter-notebooks/blob/main/Site%20Suitability%20Analysis%20Report%20-%20Personal.pdf' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Site Suitability Analysis ↗" paragraph="postgreSQL | QGIS | PostGIS" 
          image={site} bgColor="rgba(142, 41, 16, 0.4)"/>
          </a>
          {/* to do*/}
          {/* <a href='https://github.com/HasNas03/to-do-list' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="To-Do App ↗" paragraph="JavaScript | React.js | HTML/CSS" image={todo}/>
          </a> */}
          {/* emissions*/}
          <a href='https://github.com/HasNas03/Jupyter-notebooks/blob/main/emissions/Carbon%20Emissions.ipynb' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="CO2 Emissions Statistical Analysis ↗" paragraph="Python | pandas | Jupyter Notebook" 
          image={carImage} bgColor="rgba(84, 84, 84, 0.4)"/>
          </a>
          {/* covid tableau*/}
          <a href='https://public.tableau.com/views/COVIDDashboard_17050443722110/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="2020 COVID Cases Interactive Dashboard ↗" paragraph="Tableau" 
          image={covidImage} bgColor="rgba(17, 116, 50, 0.4)"/>
          </a>
          {/* house tableau*/}
          <a href='https://public.tableau.com/views/HouseSaleDashboard_17050002821300/HouseSaleDashboard?:language=en-US&:display_count=n&:origin=viz_share_link' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Real Estate Interactive Dashboard ↗" paragraph="Tableau" 
          image={houseImage} bgColor="rgba(13, 126, 96, 0.4)"/>
          </a>
        </div>
    </section>
  );
}

export default Projects;
