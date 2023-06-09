import Link from "next/link";
// import styles from "./header.module.css"

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
                                href='https://drive.google.com/file/d/1b6F9hsLZezOecrf5RPqoO0DtlPmaqgnD/view?usp=sharing'
                                alt="alt text"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Resume</Link>
                </li>
            </ul>
            <hr
                style={{
                    background: "white",
                    height: "3px",
                    border: "none",
                }}
            />
        </div>
    </>
}