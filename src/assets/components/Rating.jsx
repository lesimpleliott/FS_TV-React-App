import PropTypes from "prop-types";
import { colors } from "../styles/colors";
import styled from "styled-components";

const Rating = ({ rating }) => {
    const noteFive = rating / 2;
    const roundedNumber = parseFloat(rating.toFixed(1));

    return (
        <RatingDiv>
            <div className="stars">
                <span className={`fa-star ${ noteFive > 0 ? "fa-solid" : "fa-regular" }`} ></span>
                <span className={`fa-star ${ noteFive > 1 ? "fa-solid" : "fa-regular" }`} ></span>
                <span className={`fa-star ${ noteFive > 2 ? "fa-solid" : "fa-regular" }`} ></span>
                <span className={`fa-star ${ noteFive > 3 ? "fa-solid" : "fa-regular" }`} ></span>
                <span className={`fa-star ${ noteFive > 4 ? "fa-solid" : "fa-regular" }`} ></span>
            </div>
            <div className="note">
                <strong>{roundedNumber}</strong> /10
            </div>
        </RatingDiv>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

const RatingDiv = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;

    .stars {
        display: flex;
        gap: 2px;
        font-size: 1.2rem;
        color: ${colors.star};
    }

    .note {
        font-size: .85rem;

        strong {
            font-size: 1.1rem;
            font-weight: 800;
        }
    }



`;

export default Rating;
