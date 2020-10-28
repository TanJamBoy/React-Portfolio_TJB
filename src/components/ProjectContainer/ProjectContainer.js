import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectContainer() {
    return(
        <div className="container mb-5">
            <div className="row">
                <div className="col-6">
                    <ProjectCard title="Game Search Engine" link="https://github.com/TanJamBoy/Project_1-Game_Search" image="./gameSearch.png" description="Website that utilizes APIs to allow you to search for games"/>
                    <ProjectCard title="Basic Cube RPG" link="https://github.com/TanJamBoy/Project_2_TB_AL" image="./cubeGame.png" description="A webpage that allows a user to login and play a very basic rpg"/>
                    <ProjectCard title="Budget Tracker" link="https://github.com/TanJamBoy/Progressive_Budget_TJB" image="./budget.png" description=""/>
                </div>
                <div className="col-6">
                    <ProjectCard title="Google Book Search" link="https://github.com/TanJamBoy/GoogleBookSearch_TJB" image="./bookSearch.png" description="A webpage that allows you to search for and save books using the Google Books API"/>
                    <ProjectCard title="Workout Tracker" link="https://github.com/TanJamBoy/Workout_Tracker_TJB" image="./fitness.png" description="A website that allows you to keep track of your workouts and exercises"/>
                    <ProjectCard title="React Portfolio" link="https://github.com/TanJamBoy/React-Portfolio_TJB" image="https://via.placeholder.com/500x250" description="This website"/>
                </div>
            </div>
        </div>
    )
};

export default ProjectContainer;