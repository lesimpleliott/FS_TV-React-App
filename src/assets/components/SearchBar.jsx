import styled from "styled-components";
import { colors } from "../styles/colors";

const SearchBar = () => {
    return (
        <SearchbarWrapper>
            <form>
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Quel film cherches-tu ?"
                />
                <input type="submit" value="Rechercher" />
            </form>
            <div className="sortButtons">
                <button id="goodToBad">
                    <i className="fa-solid fa-arrow-trend-down"></i>Top
                </button>
                <button id="badToGood">
                    <i className="fa-solid fa-arrow-trend-up"></i>Flop
                </button>
            </div>
        </SearchbarWrapper>
    );
};

// STYLED-COMPONENTS
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

export default SearchBar;
