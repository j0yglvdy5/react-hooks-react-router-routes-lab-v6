import Home from "./pages/Home.js";
import Actors from "./pages/Actors.js";
import Directors from "./pages/Directors.js";
import Movie from "./pages/Movie.js";
import MovieList from "./components/MovieList.js";
import ErrorPage from "./pages/ErrorPage.js";

const routes = [
   {
    path:"/",
    element:<Home/>,
    errorElement:<ErrorPage/>

   },
   {
    path:"/Actors",
    element:<Actors/>,
    errorElement:<ErrorPage/>
   },
   {
    path:"/Directors",
    element:<Directors/>,
    errorElement:<ErrorPage/>
   },
   {
    path:"/Movie",
    element:<Movie/>,
    errorElement:<ErrorPage/>
   },
   {
    path:"/Movielist",
    element:<MovieList/>,
    errorElement:<ErrorPage/>
   }
  ];

export default routes;