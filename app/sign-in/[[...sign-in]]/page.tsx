import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f2f5]">
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-syne)] text-2xl font-extrabold tracking-tight text-gray-900">
            Labour<span className="text-[#3a6bef]">Link</span>
            <span className="ml-2 rounded-full border border-[rgba(0,0,0,0.12)] px-2 py-0.5 text-[9px] uppercase tracking-widest text-gray-400">CRM</span>
          </h1>
          <p className="mt-1 text-sm text-gray-500">Sign in to your account</p>
        </div>
        <SignIn />
      </div>
    </div>
  )
}
