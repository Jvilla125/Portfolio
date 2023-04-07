import Link from "next/link";
import styles from "./header.module.css"

export default function Header() {
    return <>
        <div class="container-fluid">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="/aboutme">About Me</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="/projects">Projects</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Resume</a>
                </li>
            </ul>
            <hr
                style={{
                    background: "black",
                    height: "3px",
                    border: "none",
                }}
            />
        </div>
    </>
}