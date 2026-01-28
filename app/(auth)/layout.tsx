import React from 'react'

function AuthDashboard({children}: {children: React.ReactNode}) {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <main className="">
            {children}
        </main>
    </div>
  )
}

export default AuthDashboard