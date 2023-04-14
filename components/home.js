import Image from 'next/image';
import Link from 'next/link';
import Social from "../components/social"

export default function Index() {
    return (
        <>
            <div class="d-flex position-absolute top-50 start-50 translate-middle">
                <div class="flex-grow-1 ms-5 text-center">
                    <h1 class="Jeff">Jeffrey Villacorta</h1>
                    <br />
                    <h2 style={{fontSize: "60px"}}>Software Engineer</h2>
                    <br/>
                    <h4 style={{fontSize: "35px"}}>Located in Los Angeles, CA. <i class="bi bi-geo-alt" style={{fontSize: "30px"}}></i></h4>
                    <br/>
                    <ul class="nav nav-underline justify-content-center">
                        <li class="nav-item">
                            <Link class="nav-link white-text active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/aboutme">About Me</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                class="nav-link"
                                href='https://drive.google.com/file/d/1JWA5Bmg27_DE27uChdObV5ZjHntOAODE/view?usp=share_link'
                                alt="alt text"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Resume</Link>
                        </li>
                    </ul>
                    <br/>
                    <br/>
                    <Social />
                </div>
            </div>
        </>
    )
}