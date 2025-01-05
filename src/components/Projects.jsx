import React from 'react'

function Project(props){
return(
 <div className='project-card'>
   <div className='image-card'><img className='project-image' src={props.source} alt="image" /></div>
   <div className="project-name"><p>{props.name}</p></div>
 </div>

)
}

const Projects = () => {
  return (
    <div className='project'>
      <div className="project-heading"><h2>My Projects</h2></div>
    
    <div className="output-shown">
    <Project
    source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDZHb54oYeVwWWFi-uqN_7K_0wXi2kTfV1w&s"
    name = "Disney + Hotstar(clone)" 
    />

    <Project
    source="https://www.allfreefonts.co/wp-content/uploads/2024/09/Spotify-Font.jpg"
    name = "Spotify(clone)" 
    />

    <Project
    source="https://s3-alpha.figma.com/hub/file/2893009731/269ab397-737b-4c80-9350-744919d48f78-cover.png"
    name = "Todo(Full-stack-website)" 
    />

    <Project
    source="https://images04.nicepage.com/feature/583347/blog-category-website-builder.jpg"
    name = "Blogging website" 
    />
    </div>
      
    </div>
  )
}

export default Projects
