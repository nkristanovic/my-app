import React from 'react';
import {
    ModalWrapper,
    Inner,
    Title,
    ButtonModalClose,
    ModalBody,
    ModalOverlay
} from './ModalStyle';

const Modal = ({children, modalIsOpen, setModalIsOpen}) => {
   
    return (
        <> 
            {modalIsOpen &&
                <ModalOverlay>
                    <ModalWrapper>
                        <ModalBody>
                            <Inner>
                                <Title>Add event</Title>
                                <ButtonModalClose onClick={() => setModalIsOpen(false)}>
                                    X
                                </ButtonModalClose>
                            </Inner>
                                {children}
                        </ModalBody>
                    </ModalWrapper>
                </ModalOverlay>
            }
        </>
    )
}

export default Modal;