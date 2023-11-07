import Image from 'next/image'
import Construction from './ui/construction'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-pink-700">
      <Construction/>
    </main>
  )
}
