import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Hero 
        title="Little Lemon" 
        motto="High quality, hand made, organic lemonade"
      />
      <h1>Hekki</h1>

   </>
  )
}
