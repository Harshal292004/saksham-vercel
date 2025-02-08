import { SignUp } from '@clerk/nextjs'
const page = () => {
  return <SignUp afterSignOutUrl={'/'} forceRedirectUrl={'/dashboard '}></SignUp>
}

export default page