import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieList from "./pages/MovieList";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="*" component={NotFound} />
            <Route path="/movies/:id" component={Movie} />
            <Route path="/" component={Home} />
            <Route path="/movies" component={MovieList} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
