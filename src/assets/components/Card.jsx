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
        <CardDiv className="cards" id={movie.id}>
            <div className="preview">
                <img
                    className="poster"
                    src={
                        movie.backdrop_path
                            ? "https://image.tmdb.org/t/p/original/" +
                              movie.backdrop_path
                            : "./posterError.png"
                    }
                    alt={"affiche " + movie.title}
                />
                <div className="favorite">
                    <i className="fa-regular fa-heart"></i>
                </div>
                <p className="year">{dateFormater(movie.release_date)}</p>
            </div>

            <div className="infos">
                <h2 className="title">{movie.title}</h2>
                <div className="moreInfos">
                    <Tags tags={movie.genre_ids} />
                    <Rating rating={movie.vote_average} />
                </div>
            </div>
        </CardDiv>
    );
};

Card.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        backdrop_path: PropTypes.string,
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
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: transform 100ms ease-out;
    }

    .preview {
        height: 250px;
        position: relative;

        .favorite {
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            background: rgba(0,0,0,.5);
            border-bottom-left-radius: 10px;
        }

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
            background: rgba(0,0,0,.5);
            border-radius: 10px 0 0 0;
            font-size: 1.2rem;
            font-weight: 800;
        }
    }

    .infos {
        width: 100%;
        padding: 15px 15px 20px 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title {
            text-overflow: ellipsis;
            font-size: 1.4rem;
        }

        .moreInfos {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
`;

export default Card;
