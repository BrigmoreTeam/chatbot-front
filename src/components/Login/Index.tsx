import React from 'react'

type Props = {
  name: string
}

const LoginPage = (props: Props) => {
  return (
    <div className='bg-red-500'>
      <p className='text-xs bg-red-500'>{props.name}</p>
    </div>
  )
}

export default LoginPage;