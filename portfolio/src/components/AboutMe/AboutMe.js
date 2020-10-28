import React from "react";
import "./AboutMe.css";

function AboutMe() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="mt-3 p-5 container box">
                        <div className="row">
                            <div className="mt-3 col-12">
                                <center>
                                    <h2>About Me</h2>
                                </center>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mt-3 col-12">
                                <center>
                                    <img src="https://via.placeholder.com/300" alt="myself"/>
                                </center>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mt-5 col-12">
                                <p>
                                    My name is Tanner, I was born in Tucson, Arizona. I moved to Las Vegas, Nevada when I was still very young and I
                                    have lived here for most of my life.
                                </p>
                                <p>
                                    I moved back to Tucson for a short while and fixed smartphones and other
                                    devices. I was always very interesting in coding, in highschool I did an online javascript coding course and wrote a
                                    few basic prgrams in C++.
                                </p>
                                <p>
                                    I spend most of my free time playing video games with my friends over discord and trying
                                    to 3d model and animate in blender. I know how to play guitar and own two of them but I don't play them very often
                                    anymore.
                                </p>
                                <p>
                                    I've had a hard time trying to decide what career path to go down until I found out about the Coding
                                    Bootcamp but I hope that this class opens up many career paths into the coding industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;