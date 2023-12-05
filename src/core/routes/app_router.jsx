import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../../features/auth/components/private_route";
import PublicRoute from "../../features/auth/components/public_route";
import HomeView from "../../features/home/views/home_view";
import MovieView from "../../features/movie/view/movie_view";
import NotFound from '../../features/not_found/views/not_found';
import LoginView from "../../features/auth/views/login/views/login_view"

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginView />
      </PublicRoute>
    ),
  },
  // 404
  {
    path: "*",
    element: <PublicRoute>
    <NotFound/>
</PublicRoute>,/* <div> No se encontro la pagina </div>, */
  },
  {
    path: "/:id",
    element: 
        <PrivateRoute>
            <MovieView/>
        </PrivateRoute>,
},
]);