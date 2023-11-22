import Link from 'next/link'

import Construction from './ui/Construction'
import InputSearch from './ui/InputSearch'
import Header from './ui/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-merme-cream-bg dark:bg-merme-black">
        <Construction />
      </main>
    </>
  )
}
