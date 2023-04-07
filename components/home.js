import Image from 'next/image'; 
import Link from 'next/link';
import Social from "../components/social"

export default function Index() {
    return (
        <>
            <div class="d-flex position-absolute top-50 start-50 translate-middle" >
                <div class="flex-shrink-0">
                    <Image
                        src="/me.jpg"
                        width={250}
                        height={350}
                    />
                </div>
                <div class="flex-grow-1 ms-5 container text-center">
                    <h1>Jeffrey Villacorta</h1>
                    <br />
                    <h3>Software Engineer</h3>
                    <br />
                    <Link href="/aboutme"><button type="button" class="btn btn-primary">About Me</button></Link>
                    <br/>
                    <br/>
                    <Social/>
                    
                </div>
            </div>
        </>
    )
}