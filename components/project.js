import Image from "next/image"

export default function Projects() {
    return (
        <>
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
                <br/>
                <br/>
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
                <br/>
                <br/>
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
        </>
    )
}
