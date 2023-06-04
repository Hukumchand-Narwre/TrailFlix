import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import request from "./request";
import Nav from "./components/Nav";

//const Row = React.lazy(() => import("./components/Row"));
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />

      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
