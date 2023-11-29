import { useContext } from "react"
import { AuthContext } from "../context/auth_context"

export const useAuth = () => {
  const {isLoggedId} = useContext(AuthContext)

  return {isLoggedId};
}