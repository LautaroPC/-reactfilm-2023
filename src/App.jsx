import { environment } from "../environments/environments.qa"

const App = () => {
  return (
    <div>
      <h1>APP DE PELIS</h1>
      <h2>{environment.title}</h2>
    </div>
  )
}

export default App
