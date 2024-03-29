import styled from "styled-components";
import { colors } from "../styles/colors";

const Modal = () => {
    return (
        <ModalWrapper>
            <section className="modal">
                <img className="backdrop" src="" alt="" />
                <div className="preview">
                    <img className="preview__poster" src="" alt="" />
                    <h2 className="preview__title">
                        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
                        amet.Lorem ipsum dolor sit amet.
                    </h2>
                </div>
            </section>
        </ModalWrapper>
    );
};

const ModalWrapper = styled.section`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal {
        width: 75vw;
        height: 75vh;
        background: ${colors.background};
        border-radius: 20px;
        border: solid 5px ${colors.card};
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

        .backdrop {
            border: solid 1px blue;
            height: 30%;
            width: 100%;
        }

        .preview {
            border: solid 1px red;
            height: 30%;
            width: 100%;
            position: relative;


            .poster {
                border: solid 1px red;
                width: 100px;
                height: 140px;
                position: absolute;
                bottom: -50px;
                left: 30px;
            }
        }

        h2 {
            border: solid 1px red;
            width: 100%;
            padding-left: 150px;
            padding-top: 20px;
            font-size: 1.8rem;
        }
    }
`;

export default Modal;
