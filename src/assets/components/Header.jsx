import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="logo">
                <NavLink to="/">
                    <h1>MoviesApp</h1>
                </NavLink>
            </div>
            <ul className="navBar">
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/favorite">Favoris</NavLink>
                </li>
            </ul>
        </HeaderWrapper>
    );
};

// STYLED-COMPONENTS
const HeaderWrapper = styled.header`
    height: 75px;
    width: 100%;
    padding-block: 10px;
    display: flex;
    justify-content: space-between;

    .navBar {
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;

        li {
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 1.5rem;
            text-decoration-thickness: 0px;
            &:hover,
            & .active {
                text-decoration: underline;
                text-decoration-color: ${colors.primary};
                text-decoration-thickness: 5px;
                text-underline-offset: 5px;
            }
        }
    }

    .logo {
        height: 100%;
        display: flex;
        align-items: center;

        img {
            height: 100%;
        }

        h1 {
            color: #fff;
            font-size: 2.5rem;
            font-style: italic;
            text-shadow: ${colors.primary} 2px 2px;
        }
    }
`;

export default Header;
