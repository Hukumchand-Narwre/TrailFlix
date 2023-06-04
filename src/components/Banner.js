import React, { useEffect, useRef, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const effectran = useRef(false);
  useEffect(() => {
    if (effectran.current === false) {
      async function fetchData() {
        const request = await axios.get(requests.fetchActionMovies);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return () => {
          effectran.current = true;
          return request;
        };
      }
      fetchData();
    }
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
          alert("Trailer for this new movie is not available");
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <header
        className="banner"
        style={{
          width: "100%",
          objectFit: "contain",
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center top",
          position: "relative",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button
              className="banner__button"
              onClick={() => handleClick(movie)}
            >
              Play
            </button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner__fadeBottom"></div>
      </header>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
}
