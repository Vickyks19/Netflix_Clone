import React from "react";
import Banner from "../../Components/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import Row from "../../Components/Row/Row";
import request from "../../helpers/Request";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginals}
        isLarge
      />

      <Row title="Trending Now" fetchUrl={request.fetchTrending} />

      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
