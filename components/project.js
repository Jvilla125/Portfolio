import Image from "next/image"

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

                    <ul class="list-unstyled">
                        <li class="media">
                            <Image
                                class="mr-3"
                                src="/ucsc.jpg"
                                width={250}
                                height={350}
                            />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">List-based media object</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </li>
                        <li class="media my-4">
                            <Image
                                class="mr-3"
                                src="/ucsc.jpg"
                                width={250}
                                height={350}
                            />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">List-based media object</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </li>
                        <li class="media">
                            <Image
                                class="mr-3"
                                src="/ucsc.jpg"
                                width={250}
                                height={350}
                            />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">List-based media object</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </li>
                    </ul>
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
