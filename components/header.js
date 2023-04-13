import Link from "next/link";
import styles from "./header.module.css"

export default function Header() {
    return <>
        <div class="container-fluid">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link class="nav-link white-text" aria-current="page" href="/">Home</Link>
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
            <hr
                style={{
                    background: "white",
                    height: "5px",
                    border: "none",
                }}
            />
        </div>
    </>
}