import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const authDetail = () => {

    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            }else {
                setAuthUser(null)
            }
        })
    }, [])

  return (
    <div>authDetail</div>
  )
}

export default authDetail