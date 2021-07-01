import Head from 'next/head'
import Image from 'next/image'

import Header from '../Component/Header'
import Trusted from '../Component/Trusted'
import Pannel from '../Component/Pannel'
import DoubleSection from '../Component/DoubleSection'

export default function Home() {
  return (
    <main>
        <Header />
        <Trusted />
        <Pannel />
        <DoubleSection />
    </main>
  )
}
