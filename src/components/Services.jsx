import React from 'react'

function Service(props){
  return(
    <div className="service-card">
      <h2 className="service-name">{props.name}</h2>
    </div>
  )
}

const Services = () => {
  return (
    <div className='services'>
     <div className="service-heading"><h2>My Services</h2></div>
     <div className="service-content">
     <Service name="UI/UX"/>
      <Service name="FrontEnd"/>
      <Service name="Full-Stack "/>
     </div>
    </div>
  )
}

export default Services
