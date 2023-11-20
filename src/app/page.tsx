import Image from 'next/image'
import Construction from './ui/Construction'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-merme-cream-bg dark:bg-merme-black">
      <Construction/>
    </main>
  )
}
