import Image from 'next/image';
import Link from 'next/link';
import Social from "../components/social"

export default function Index() {
    return (
        <>
                <div class="d-flex align-items-center justify-content-center " style={{height: "850px"}}>
                <div class="text-center">
                    <h1 class="Jeff">Jeffrey Villacorta</h1>
                    <br />
                    <h2 style={{fontSize: "43px"}}>Software Engineer</h2>
                    <br/>
                    <h4 style={{fontSize: "25px"}}>Located in Los Angeles, CA. <i class="bi bi-geo-alt" style={{fontSize: "30px"}}></i></h4>
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
                                href='https://drive.google.com/file/d/1Zc-R9o965VSYcnp1yvynpUQs0w30bpJ4/view?usp=sharing'
                                alt="alt text"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Resume</Link>
                        </li>
                    </ul>
                    <br/>
                    <Social />
                    <br/>
                </div>
            </div>
        </>
    )
}