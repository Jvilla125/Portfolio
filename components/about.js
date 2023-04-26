import Image from 'next/image';
import {SiTypescript} from "react-icons/si"
export default function AboutMe() {
    return (
        <>

            <h1 class="text-center">About Me</h1>
            <div class="row row-cols-1 row-cols-md-2">
                <div class="card mx-auto" style={{ width: "35rem" }}>
                    <div class="card-body ">
                        <Image
                            class="rounded mx-auto d-block"
                            src="/ucsc.jpg"
                            width={250}
                            height={350}
                        />
                        <br />
                        <h3 class="card-title text-center">Jeffrey Villacorta</h3>
                        <p class="text-center" style={{fontSize: "20px"}}><u>Current Status:</u> Learning Typescript <SiTypescript  style={{ fontSize: "40px", color: "lightblue" }}/></p>
                        <hr />
                        <p class="card-text">Hello! I'm a Full Stack Software Engineer who loves to take on new challenges and is always striving to learn more.  I'm passionate about using my skills to solve problems and create innovative solutions. 
                        I have a strong drive to continually improve myself and learn as much as I can. <br /> <br />

                        With a Bachelor of Arts in Computational Mathematics from the University of California, Santa Cruz, and hands-on experience in Construction Management and Software Engineering, 
                    I possess a diverse skill set that allows me to approach challenges from different perspectives.<br /> <br />
                    My professional journey started with an internship at a Commercial General Contractor, where I honed my project management, analytical, and problem-solving skills.  
                    I then transitioned to a Project Engineer role at Swinerton Builders, where I applied my technical and interpersonal abilities to coordinate project activities and ensure timely delivery.
                    Driven by a desire to merge my educational background with my interests, I enrolled in a coding bootcamp to start a career transition into Software Engineering. 
                    I graduated from General Assembly's Software Engineering Bootcamp in October 2022, where I sharpened my skills in full-stack web development, software architecture, 
                    and database design. <br /> <br />
                    My goal is to continue to explore new technologies, languages, and frameworks that can enhance my abilities as a Software Engineer.
                    I am confident that my expertise in software development, coupled with my strong work ethic and commitment to results, allows me to thrive in any professional setting.
                        </p>
                    </div>
                    
                    <p class="text-center">
                        <a class="btn btn-outline-light " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Other Facts About Me <i class="bi bi-arrow-down-short" style={{ fontSize: "25px" }}></i>
                        </a>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <ul >
                                <li>I am Peruvian <p class="flag peru"></p> </li>
                                <li>I registered for the LA Marathon three months before on impulse. (I finished!)</li>
                                <li>On my free time I am either at the gym, playing guitar, or spending time with my family.</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <br />

            </div>
            <br />
        </>
    )
}