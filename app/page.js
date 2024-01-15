import Header from '@/components/header/header'
import css from './page.module.scss'
import "@/styles/global.scss"
import Hero from '@/components/hero/Hero'
import Experties from '@/components/experties/Experties'
import Work from '@/components/works/Work'
import Portfolio from '@/components/portfolio/Portfolio'
import People from '@/components/people/People'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
    <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experties/>
    <Work/>
    <Portfolio/>
    <People/>
    <Footer/>
    </div>
    </>
  )
}
