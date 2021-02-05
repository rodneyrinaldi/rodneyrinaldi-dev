import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ComingSoon() {
  const router = useRouter()

  useEffect(() => {
    router.push('https://rr-coming-soon.vercel.app?service=rodneyrinaldi')
  })

  return <p> connecting...</p>
}

