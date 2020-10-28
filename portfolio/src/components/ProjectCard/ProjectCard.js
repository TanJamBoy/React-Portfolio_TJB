import React from "react";
import "./ProjectCard.css"

function ProjectCard(props) {
    return(
        <div className="card mt-5 mb-5">
            <img src={props.image} className="card-img-top" alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">Link To Github</a>
            </div>
        </div>
    )
};

export default ProjectCard;