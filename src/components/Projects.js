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
import noteImage from '../assets/note.jpeg'
import taskImage from '../assets/tasks.png'

function Projects() {
  return (
    <section className='projects' id='projects'>
      <h1 className="sectiontitle othertitle">Projects</h1>
        <div className='projectList'>
          {/* comic catalog*/}
          <a href='https://github.com/HasNas03/comic-catalog-service' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Comic Catalog ↗" paragraph="Java | Spring Boot | Postman" 
          image={comicImage} 
          bgColor="#f62206"
          revealDelay={0}
          />
          </a>
          {/* Brother Eye*/}
          <a href='https://github.com/HasNas03/BrotherEye' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Brother Eye ↗" paragraph="AWS Rekognition | Lambda | DynamoDB" 
          image={suiteImage} bgColor="#1da2d2" revealDelay={0.04}/>
          </a>
          {/*Fetchdex*/}
          <a href='https://github.com/HasNas03/Fetchdex' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Fetchdex ↗" paragraph="Python | FastAPI | Ollama" 
          image={noteImage} bgColor="#34e610" revealDelay={0.04}/>
          </a>
          {/* treemap*/}
          <Card name="FilePath Treemap Visualizer" paragraph="Python | pygame" 
          image={treemap} bgColor="#10d681" revealDelay={0.08}/>
          {/* boggle pro*/}
          <Card name="Boggle Pro" paragraph="Java | JavaFX" 
          image={boggle} bgColor="#ea710e" revealDelay={0}/>
          {/* tetris*/}
          <Card name="Tetris" paragraph="Java | JavaFX" 
          image={tetris2} bgColor="#d21bd5" revealDelay={0.04}/>
          {/* coconut tasks*/}
          <a href='https://github.com/HasNas03/Coconut-Tasks' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Coconut Tasks ↗" paragraph="JavaScript| HTML | CSS" 
          image={taskImage} bgColor="#715a4a" revealDelay={0.08}/>
          </a>
          {/* site suitability*/}
          <a href='https://github.com/HasNas03/Jupyter-notebooks' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Site Suitability Analysis ↗" paragraph="postgreSQL | QGIS | PostGIS" 
          image={site} bgColor="#b1b0af" revealDelay={0.08}/>
          </a>
          {/* emissions*/}
          <a href='https://github.com/HasNas03/Jupyter-notebooks/blob/main/emissions/Carbon%20Emissions.ipynb' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="CO2 Emissions Statistical Analysis ↗" paragraph="Python | pandas | Jupyter Notebook" 
          image={carImage} bgColor="#8a3bc3" revealDelay={0}/>
          </a>
          {/* covid tableau*/}
          <a href='https://public.tableau.com/views/COVIDDashboard_17050443722110/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="2020 COVID Cases Interactive Dashboard ↗" paragraph="Tableau" 
          image={covidImage} bgColor="#21c54d" revealDelay={0.04}/>
          </a>
          {/* house tableau*/}
          <a href='https://public.tableau.com/views/HouseSaleDashboard_17050002821300/HouseSaleDashboard?:language=en-US&:display_count=n&:origin=viz_share_link' style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
          <Card name="Real Estate Interactive Dashboard ↗" paragraph="Tableau" 
          image={houseImage} bgColor="#99bd8d" revealDelay={0.08}/>
          </a>
        </div>
    </section>
  );
}

export default Projects;
