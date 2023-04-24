import Header from "../components/header";
import Projects from "../components/project";
import Head from 'next/head'

export default function ProjectPage() {
    return (
        <>

            <Head><title>Jeffrey Villacorta's Portfolio</title></Head>
            <Header />
            <Projects />
        </>
    )
}