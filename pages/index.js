import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "../components/header"
import Index from "../components/home"
import AboutMe from '../components/about'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head><title>Jeffrey Villacorta's Portfolio</title></Head>
    <Index/>
    </>
  )
}
