import React from 'react'
import './projectCard.css'




const ProjectCard = ({projectTitle, projectInfo,id,pathToImage,imageRedirect}) => {
    return (
    <div className="project-card" key={id}>
       <div className="contai">
          <div className="photo">
            <a href={imageRedirect}><img src= {pathToImage} className="pic" alt="pic"/></a>
          </div>
           {/* <div className='tex'>
              <h1>{upper}</h1>
           </div> */}
            <div className="text">
            <a href={imageRedirect}><h3 className='projectit'>{projectTitle}</h3></a>
            <a href={imageRedirect}><h2>{projectInfo}</h2></a>
            </div>
       </div>
    </div>
    )
}

export default ProjectCard