import React from 'react'
import { useAuth } from '../../auth/hooks/use_auth'
import AppButton from '../../../core/components/app_button/app_button'
import '../../home/views/home_view'

const Header = ({ children }) => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <div>
      {isLoggedIn ?
        <div style={{
          display: "flex",
          justifyIontent: "space-between",
          alignItems: "center",
        }}
        >
          {children}
          <AppButton style={{
            color: "white",
            background: "red",
            border: "none",
            borderRadius: "5px",
            padding: "3px 10px",
            margin: "0 20px",
          }} onClick={logout}
          >Cerrar sesion</AppButton>
        </div> : null}
    </div>
  )
}

export default Header