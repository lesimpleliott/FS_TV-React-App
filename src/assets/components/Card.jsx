import styled from "styled-components";
import { colors } from "../styles/colors";
import PropTypes from "prop-types";
import Rating from "./Rating";
import Tags from "./Tags";

const Card = ({ movie }) => {
    const dateFormater = (date) => {
        let [yyyy] = date.split("-");
        return [yyyy];
    };

    return (
        <CardDiv>
            <div className="preview">
                <img
                    className="poster"
                    src={
                        movie.poster_path
                            ? "https://image.tmdb.org/t/p/original/" +
                              movie.poster_path
                            : "./posterError.png"
                    }
                    alt={"affiche " + movie.title}
                />
                <p className="year">{dateFormater(movie.release_date)}</p>
            </div>

            <div className="infos">
                <h2 className="title">{movie.title}</h2>
                <Tags tags={movie.genre_ids} />
                <Rating rating={movie.vote_average} />
            </div>
        </CardDiv>
    );
};

Card.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        genre_ids: PropTypes.array,
        vote_average: PropTypes.number,
    }).isRequired,
};

const CardDiv = styled.div`
    min-width: 300px;
    flex: 1 0 20%;
    background: ${colors.card};
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .preview {
        position: relative;

        .poster {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .year {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 5px 15px;
            background: #000;
            border-radius: 10px 0 0 0;
            font-size: 1.2rem;
            font-weight: 800;
        }
    }

    .infos {
        width: 100%;
        height: 150px;
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title {
            text-overflow: ellipsis;
            font-size: 1.4rem;
        }
    }
`;

export default Card;
