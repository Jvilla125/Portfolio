import Image from 'next/image';

export default function AboutMe() {
    return (
        <>
            <h1 class="text-center">About Me</h1>
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="card mb-3 " style={{ width: "600px", height: "400px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <Image
                                    class="img-fluid rounded-start"
                                    src="/ucsc.jpg"
                                    width={250}
                                    height={350}
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Hello, my name is Jeffrey Villacorta.</h5>
                                    <p class="card-text">I am a Software Engineer located in Los Angeles, CA.
                                        I graduated from University of California, Santa Cruz with a B.A. in Computational Mathematics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <i class="bi bi-arrow-down"></i>
                    </div>
                    <div class="card mb-3 " style={{ width: "600px", height: "400px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <Image
                                    class="img-fluid rounded-start"
                                    src="/work.jpg"
                                    width={250}
                                    height={350}
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">From 2020-2022, I was a Project Engineer</h5>
                                    <p class="card-text">After graduating from UCSC </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}