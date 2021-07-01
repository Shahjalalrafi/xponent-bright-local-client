import Head from 'next/head'
import Image from 'next/image'

import Header from '../Component/Header'
import Trusted from '../Component/Trusted'
import Pannel from '../Component/Pannel'
import DoubleSection from '../Component/DoubleSection'
import Platform from '../Component/Platform'
import Details from '../Component/Details'
import Ratings from '../Component/Ratings'

export default function Home() {
  return (
    <main>
        <Header />
        <Trusted />
        <Pannel />
        <DoubleSection />
        <Platform />
        <Details />
        <Ratings />
    </main>
  )
}
