import Card from "../components/Card";
import Header from "../components/Header";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";

const Home = () => {
    const key = import.meta.env.VITE_KEYTMDB;
    const [dataMovies, setDataMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [sortVote, setSortVote] = useState('')

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}&language=fr-FR`
        )
            .then((res) => res.json())
            .then((data) => setDataMovies(data.results));
    }, [key, search]);

    return (
        <div className="myApp">
            <Header />
            <SearchbarWrapper>
                <form>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Quel film cherches-tu ?"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <input type="submit" value="Rechercher" />
                </form>
                <div className="sortButtons">
                    <button id="goodToBad" onClick={() => setSortVote("topToFlop")}>
                        <i className="fa-solid fa-arrow-trend-up"></i>Le mieux noté
                    </button>
                    <button id="badToGood" onClick={() => setSortVote("flopToTop")}>
                        <i className="fa-solid fa-arrow-trend-down"></i>Le moins bien noté
                    </button>
                </div>
            </SearchbarWrapper>

            <CardsSection>
                {dataMovies
                    .sort((a, b) => b.popularity - a.popularity)
                    .sort((a, b) => {
                        if(sortVote === "topToFlop") {
                            return b.vote_average - a.vote_average
                        } else if(sortVote === "flopToTop") {
                            return a.vote_average - b.vote_average
                        }
                    })
                    .map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
            </CardsSection>
        </div>
    );
};

// STYLED-COMPONENTS
const CardsSection = styled.section`
    width: 100%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`;

const SearchbarWrapper = styled.section`
    width: 100%;
    /* max-width: 728px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    input[type="submit"],
    button {
        color: #fff;
        background: ${colors.primary};
        font-weight: 500;
        font-size: 1.1rem;
        border: none;
        cursor: pointer;
        &:hover {
            font-weight: 900;
            background: ${colors.primDark};
            transition: background 300ms ease-out;
        }
    }

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        input {
            height: 45px;
            padding-inline: 10px;
            border: none;
        }
        input[type="text"] {
            flex: 1 0 70%;
            font-size: 1.2rem;
            border-radius: 10px 0px 0px 10px;
        }
        input[type="submit"] {
            flex: 1 0 30%;
            border-radius: 0px 10px 10px 0px;
        }

        @media screen and (max-width: 405px) {
            input[type="text"] {
                border-radius: 10px 10px 0px 0px;
            }

            input[type="submit"] {
                border-radius: 0px 0px 10px 10px;
            }
        }
    }

    .sortButtons {
        width: 100%;
        display: flex;
        justify-content: center;

        button {
            flex: 1;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            &:first-child {
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                border-right: ${colors.primDark} 1px solid;
            }
            &:last-child {
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
        }
    }
`;

export default Home;
