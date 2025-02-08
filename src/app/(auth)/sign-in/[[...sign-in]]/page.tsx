import { SignIn } from '@clerk/nextjs'
const page = () => {
  return <SignIn afterSignOutUrl={'/'} forceRedirectUrl={'/dashboard'}></SignIn>
}

export default page