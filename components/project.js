import Image from "next/image"
import Link from "next/link";

export default function Projects() {
    return (
        <>
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active text" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Software Engineer Projects</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Construction</button>
                </li>
            </ul>
            <div class="tab-content text-center" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {/* Project info below  */}
                    <br />
                    <div class="card mx-auto" style={{ width: "30rem" }}>
                        <h5 class="card-header">Connect Four</h5>
                        <div class="card-body">
                            <Image
                                class="img-fluid rounded-start"
                                src="/connectfour.png"
                                width={250}
                                height={350}
                            />
                            <p class="card-text">An online game of connect four where you can play against your friend!</p>
                            <p class="card-text">Languages Used: </p>
                            <br />
                            <br />
                            <Link href="https://github.com/Jvilla125/P1-Connect-Four" target="_blank"><button type="button" class="btn btn-primary">Github Link</button></Link> <vr />
                            <Link href="https://jvilla125.github.io/P1-Connect-Four/" target="_blank"><button type="button" class="btn btn-primary">Play Connect four!</button></Link>
                        </div>
                    </div>
                    {/* Project info below  */}
                    <br />
                    <br />
                    <div class="card mx-auto" style={{ width: "30rem" }}>
                        <h5 class="card-header">Travel App Tracker</h5>
                        <div class="card-body">
                            <Image
                                class="img-fluid rounded-start"
                                src="/travel.png"
                                width={300}
                                height={450}
                            />
                            <p class="card-text">Using google authentication, you will be able to keep track of all the trips that you may have taken over the years.</p>
                            <p class="card-text">Languages Used: </p>
                            <br />
                            <br />
                            <Link href="https://github.com/Jvilla125/Travel-App-Tracker" target="_blank"><button type="button" class="btn btn-primary">Github Link</button></Link> <vr />
                            <Link href="https://travel-app-tracker.cyclic.app/" target="_blank"><button type="button" class="btn btn-primary">Travel App Tracker</button></Link>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="card-deck">
                        <div class="card1">
                            {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                            <Image
                                class="img-fluid rounded-start"
                                src="/ucsc.jpg"
                                width={250}
                                height={350}
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div class="card1">
                            {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                            <Image
                                class="img-fluid rounded-start"
                                src="/ucsc.jpg"
                                width={250}
                                height={350}
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div class="card1">
                            {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                            <Image
                                class="img-fluid rounded-start"
                                src="/ucsc.jpg"
                                width={250}
                                height={350}
                            />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}
