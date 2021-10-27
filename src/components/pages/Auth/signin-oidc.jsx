import React, { useEffect } from 'react'
import { signinRedirectCallback } from 'services/Auth/userManager'
import { useHistory } from 'react-router-dom'

function SigninOidc() {
  const history = useHistory();
  useEffect(() => {
    async function signinAsync() {
      await signinRedirectCallback()
      history.push('/dashboard/default')
    }
    signinAsync()
  }, [history])

  return (
    <div> 
      Redirecting...
    </div>
  )
}

export default SigninOidc
