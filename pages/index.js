import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Item from '@/components/Item'
import Main from '@/components/Main'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Hero 
        title="Little Lemon" 
        motto="High quality, hand made, organic food at your fingertips."
        picture="/lemon.png"
      />
      
      <Main/>

   </>
  )
}
