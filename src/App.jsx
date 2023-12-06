import { RouterProvider } from "react-router-dom";
import RootProvider from "./core/provider/root_provider";
import {appRouter} from "./core/routes/app_router";

// Swiper
import { register as registerSwiper} from 'swiper/element/bundle';
registerSwiper()


function App() {

  return (
    <>
    <RootProvider>
      <RouterProvider router={appRouter}/>
    </RootProvider>
    </>
  )
}

export default App
