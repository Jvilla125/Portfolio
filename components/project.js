import Image from "next/image"
import Link from "next/link";
import { SiReact, SiMongodb, SiJavascript, SiCss3, SiHtml5, SiPython, SiPostgresql, SiBootstrap } from "react-icons/si"
import { DiNodejs, DiDjango } from "react-icons/di";

export default function Projects() {
    return (
        <>
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active text" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Software Engineer Projects</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Project Engineer Projects</button>
                </li>
            </ul>
            <div class="tab-content text-center" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <br />
                    <div class="row row-cols-1 row-cols-md-3 g-2">
                        <div class="col-project mx-auto">
                            <div class="card h-100" >
                                <h2 class="card-header">Connect Four</h2>
                                <div class="card-body">
                                    <Image
                                        class="img-fluid rounded-start"
                                        src="/connectfour.png"
                                        width={250}
                                        height={350}
                                        priority
                                    />
                                    <br />
                                    <br />
                                    <p class="card-text">A remake of the classic game of connect four where you can play against your friend!</p>
                                    <p class="card-text">Languages Used: </p>
                                    <SiJavascript class="icon-badge" style={{ color: "yellow" }} />
                                    <SiCss3 class="icon-badge" style={{ color: "blue" }} />
                                    <SiHtml5 class="icon-badge" style={{ color: "orange" }} />
                                </div>
                                <div class="card-footer">
                                    <Link href="https://github.com/Jvilla125/P1-Connect-Four" target="_blank"><button type="button" class="btn btn-primary">Github Link</button></Link> <vr />
                                    <Link href="https://jvilla125.github.io/P1-Connect-Four/" target="_blank"><button type="button" class="btn btn-primary">Play Connect four!</button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-project mx-auto">
                            <div class="card h-100" >
                                <h2 class="card-header">Travel App Tracker</h2>
                                <div class="card-body">
                                    <Image
                                        class="img-fluid rounded-start"
                                        src="/travel.png"
                                        width={400}
                                        height={500}
                                        priority
                                    />
                                    <br />
                                    <br />
                                    <p class="card-text">Using Google Authentication to login, you will be able to keep track of all the trips that you may have taken over the years.
                                        As the user, you're able to upload details (Country, City, dates, and a brief description), images, and track your costs</p>
                                    <p class="card-text">Languages Used: </p>
                                    <SiJavascript class="icon-badge" style={{ color: "yellow" }} />
                                    <SiCss3 class="icon-badge" style={{ color: "blue" }} />
                                    <SiHtml5 class="icon-badge" style={{ color: "orange" }} />
                                </div>
                                <div class="card-footer">
                                    <Link href="https://github.com/Jvilla125/Travel-App-Tracker" target="_blank"><button type="button" class="btn btn-primary">Github Link</button></Link> <vr />
                                    <Link href="https://travel-app-tracker.cyclic.app/" target="_blank"><button type="button" class="btn btn-primary">Travel App Tracker</button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-project mx-auto">
                            <div class="card h-100" >
                                <h2 class="card-header">iDrunk</h2>
                                <div class="card-body">
                                    <Image
                                        class="img-fluid rounded-start"
                                        src="/idrunk.png"
                                        width={400}
                                        height={500}
                                        priority
                                    />
                                    <br />
                                    <br />
                                    <p class="card-text">A social media app designed around your favorite activity: Drinking! Share your greatest mix drink recipes and discover new ones from people all around the world!</p>
                                    <p class="card-text">Languages Used: </p>
                                    <SiPython class="icon-badge" style={{ color: "yellow" }} />
                                    <DiDjango class="icon-badge" style={{ color: "green", background: "white" }} />
                                    <SiPostgresql class="icon-badge" style={{ color: "white", background: "blue" }} />
                                    <SiBootstrap class="icon-badge" style={{ color: "purple" }} />
                                </div>
                                <div class="card-footer">
                                    <Link href="https://github.com/jshprintz/iDrunk" target="_blank"><button type="button" class="btn btn-primary">Github Link</button></Link> <vr />
                                    <Link href="https://idrunk1.herokuapp.com/" target="_blank"><button type="button" class="btn btn-primary">iDrunk</button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-project mx-auto">
                            <div class="card h-100" >
                                <h2 class="card-header">Music Box</h2>
                                <div class="card-body">
                                    <Image
                                        class="img-fluid rounded-start"
                                        src="/musicbox.png"
                                        width={400}
                                        height={500}
                                        priority
                                    />
                                    <br />
                                    <br />
                                    <p class="card-text">MusicBox is an application where users can login and upload a song they are currently listening to! Users can also see what everybody else is listening to.</p>
                                    <p class="card-text">Languages Used: </p>
                                    <SiReact class="icon-badge" style={{ color: "blue" }} />
                                    <SiMongodb class="icon-badge" style={{ color: "green" }} />
                                    <DiNodejs class="icon-badge" />
                                </div>
                                <div class="card-footer">
                                    <Link href="https://github.com/Jvilla125/MusicBox" target="_blank"><button type="button" class="btn btn-primary">Github Link</button></Link> <vr />
                                    <Link href="https://musicbox4.herokuapp.com/Login" target="_blank"><button type="button" class="btn btn-primary">MusicBox</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />


                {/* Construction projects below, may need to create a new component */}
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="row row-cols-1 row-cols-md-3 g-2">
                        <div class="col-project mx-auto">
                            <div class="card h-100" >
                                <h2 class="card-header">The Culver Studios Office Complex Core & Shell</h2>
                                <div class="card-body">
                                    <Image
                                        class="img-fluid rounded-start"
                                        src="/culver.jpeg"
                                        width={420}
                                        height={500}
                                        priority
                                    />
                                    <br />
                                    <br />
                                    <h3>Summer 2019 - Fall 2019</h3>
                                    <h4> Intern Project Engineer</h4>
                                    
                                </div>
                                <div class="card-footer">
                                    <Link href="https://swinerton.com/project/the-culver-studios-office-complex/" target="_blank"><button type="button" class="btn btn-primary">Link to Project</button></Link> <vr />
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-project mx-auto">
                            <div class="card h-100" >
                                <h2 class="card-header">UC Santa Cruz Kresge College</h2>
                                <div class="card-body">
                                    <Image
                                        class="img-fluid rounded-start"
                                        src="/kresge.jpeg"
                                        width={400}
                                        height={500}
                                        priority
                                    />
                                    <br />
                                    <br />
                                    <h3>Fall 2019 - Spring 2020</h3>
                                    <h4> Intern Project Engineer</h4>

                                </div>
                                <div class="card-footer">
                                    <Link href="https://swinerton.com/project/ucsc-kresge-college/" target="_blank"><button type="button" class="btn btn-primary">Link to Project</button></Link> <vr />
                                </div>
                            </div>
                        </div>
                        
                        

                        <div class="col-project mx-auto">
                            <div class="card h-100" >
                                <h2 class="card-header">Westfield Topanga Expansion</h2>
                                <div class="card-body">
                                    <Image
                                        class="img-fluid rounded-start"
                                        src="/westfield.jpeg"
                                        width={400}
                                        height={500}
                                        priority
                                    />
                                    <br />
                                    <br />
                                    <h3>Summer 2020 - Winter 2022</h3>
                                    <h4> Project Engineer</h4>
                                    
                                </div>
                                <div class="card-footer">
                                    <Link href="https://swinerton.com/project/westfield-topanga-center-expansion/" target="_blank"><button type="button" class="btn btn-primary">Link to Project</button></Link> <vr />
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-project mx-auto">
                            <div class="card h-100" >
                                <h2 class="card-header">9200 Wilshire Luxury Condos</h2>
                                <div class="card-body">
                                    <Image
                                        class="img-fluid rounded-start"
                                        src="/wilshire.jpeg"
                                        width={400}
                                        height={500}
                                        priority
                                    />
                                    <br />
                                    <br />
                                    <h3>Winter 2022 - Summer 2022</h3>
                                    <h4> Project Engineer</h4>
                                </div>
                                <div class="card-footer">
                                    <Link href="https://swinerton.com/project/mandarin-oriental-residences/" target="_blank"><button type="button" class="btn btn-primary">Link to Project</button></Link> <vr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}