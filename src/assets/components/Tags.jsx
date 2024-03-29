import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";

const Tags = ({ tags }) => {
    const key = import.meta.env.VITE_KEYTMDB;
    const [dataGenres, setDataGenres] = useState([]);

    const getGenreName = (genreId) => {
        const genre = dataGenres.find((genre) => genre.id === genreId);
        return genre ? genre.name : null;
    };

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=fr-FR`
        )
            .then((res) => res.json())
            .then((data) => setDataGenres(data.genres));
    }, []);

    return (
        <TagsUl>
            {tags.map((tag, index) => (
                <li className="tag" key={index}>
                    {getGenreName(tag)}
                </li>
            ))}
        </TagsUl>
    );
};

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
};

const TagsUl = styled.ul`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;

    .tag {
        background: ${colors.secondary};
        padding: 2px 5px;
        border-radius: 5px;
    }
`;

export default Tags;
