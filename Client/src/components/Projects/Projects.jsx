import React from 'react'

import'./projects.css'
import MainAnimation from '../../Background_effect/animation'
import ProjectCard from '../ProjectCard/ProjectCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BoxTwo from '../../images/box-2.svg'
import projectArray from './data'
import Chat from '../Chat'
const Projects = () => {
    const settingsOne = {
        dots: false,
        infinite: true,
        // slidesToShow: 2,
        // slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        speed: 4000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive:[
            {
                breakpoint: 2000,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinte:true,
                    cssEase: "linear",
    
                },
            },
            {
            breakpoint: 1200,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinte:true,
                cssEase: "linear",
                

            },
        },
        {
            breakpoint:1050,
            settings:{
                slideToShow:1,
                slideToScroll:1,
                infinte:true,
                cssEase: "linear",
            },
        },
    ],
        
      };
    return (
        
        <div className="project-section" id="project">
            <div className="project-container">
                <div className="top-project-line">
                <div className="top-project-right-line">
                </div>
                </div>
                <div className="project-carousel">
                
                <Slider {...settingsOne}>
                    {projectArray.map((projects)=>(
                        <ProjectCard key={projects.id} projectTitle={projects.projectTitle}
                        projectStack={projects.projectStack}
                        projectInfo={projects.projectInfo}
                        liveLink={projects.liveLink}
                        imageRedirect = {projects.imageRedirect}
                        pathToImage = {projects.pathToImage}
                        githubLink={projects.githubLink}/>
                    ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Projects
