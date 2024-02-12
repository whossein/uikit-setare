import { styled } from "styled-components";

export const DialogDiv = styled.div`
  background-color: ${({ theme }) => theme.bgColor[4]};
  width: 100%;
  position: absolute;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 55px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;

    .caption {
      font-size: 16px;
      margin-left: 4px;
      font-weight: 100;
      color: ${({ theme }) => theme.textColor[11]};
    }
  }

  .content {
    font-size: 12px;
    font-weight: 100;
    text-align: justify;
    padding: 12px 20px 12px 20px;
    color: ${({ theme }) => theme.textColor[11]};
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  align-content: stretch;
  height: 52px;

  &.stack {
    flex-direction: column;

    div {
      border-top: 1px solid white;

      &:first-child {
        border-radius: 0;

        &::after {
          content: "";
        }
      }

      &:last-child {
        border-radius: 0 0 20px 20px;
      }

      input {
        height: 52px;
      }
    }
  }

  .modal-box {
    padding: 12px 0;
    width: 100%;
    border: 0;
    background-color: ${({ theme }) => theme.bgColor[16]};
    display: flex;
    justify-content: center;

    input {
      min-width: 100%;
      font-weight: 100;
      background-color: transparent;
      border: 0;
      height: 100%;
      color: white;
    }

    &:first-child {
      border-radius: 0 0 20px 0;

      input {
        border-left: 1px solid white;
      }
    }

    &:last-child {
      border-radius: 0 0 0 20px;
    }
  }

  &.single div {
    &:first-child {
      border-radius: 0 0 20px 20px;

      input {
        border-left: unset;
      }
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(45, 45, 45, 0.25);
  color: ${({ theme }) => theme.textColor[11]};
`;

export const ModalStyle: React.CSSProperties = {
  position: "absolute",
  zIndex: "99",
  width: "80%",
  top: "50%",
  left: "50%",
  opacity: 1,
  height: "150px",
  transition: "0.03s ease-out",
  textAlign: "center",
  color: "white",
};

export const ModalFullScreenStyle: React.CSSProperties = {
  position: "absolute",
  zIndex: "99",
  width: "100%",
  top: "5px",
  left: "0",
  opacity: 1,
  height: "100vh",
  transition: "0.03s ease-out",
  textAlign: "center",
  color: "white",
};
