import styled from "styled-components";

const FavoriteButton = () => {
    return (
        <CheckboxDiv>
            <input type="checkbox" id="favorite" />
            <label className="checkHeart" htmlFor="thursdayNight">
                <span className="heartBtn">
                    <i className="fa-regular fa-heart heart-empty"></i>
                    <i className="fa-solid fa-heart heart-full"></i>
                </span>
            </label>
        </CheckboxDiv>
    );
};

const CheckboxDiv = styled.div`
    
    position: absolute;
    top: 0;
    right: 0;

    border: solid 1px red;
    height: fit-content;
    font-size: 1.5rem;




    /* .checkHeart {
        display: flex;
        gap: 15px;

        .heartBtn {
            position: relative;
            width: 20px;

            .heart-full,
            .heart-empty {
                position: absolute;
                top: 50%;
                left: 50%;
                font-size: 1.5rem;
            }
            .heart-empty {
                color: $secondColor;
                transform: translate(-50%, -50%);
            }
            .heart-full {
                background: $secondColor;
                background-clip: text;
                color: transparent;
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
        }
    }

    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"]:checked + .checkHeart {
        .heart-full {
            animation: checkboxHeart 300ms ease-in-out forwards;
        }
    } */
`;

export default FavoriteButton;
