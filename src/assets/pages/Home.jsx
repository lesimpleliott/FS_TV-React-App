import Card from "../components/Card";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Home = () => {
    const key = import.meta.env.VITE_KEYTMDB;
    const [dataMovies, setDataMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=war&language=fr-FR`)
        .then((res) => res.json())
        .then((data) => setDataMovies(data.results))
    }, [])


    return (
        <div className="myApp">
            <Header />
            <SearchBar />

            <CardsSection>
                {dataMovies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </CardsSection>
        </div>
    );
};

const CardsSection = styled.section`
    width: 100%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`;

export default Home;
