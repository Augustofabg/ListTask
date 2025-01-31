import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    width: 113%;
    height: 114vh;
  }
`;

export const ListBox = styled.div`
  background: rgba(255, 255, 255, 1);
  padding: 30px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    transform: scale(0.85) 
  }
`;

export const AddButton = styled.button`
  width: 115px;
  height: 40px;
  font-weight: 900;
  font-size: 15px;
  border-radius: 7px;
  border: none;
  color: rgba(255, 255, 255, 1);
  background: rgba(128, 82, 236, 1);
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  margin-right: 35px;
  margin-top: 4px;

  &:hover {
  background: #401097;
  transform: scale(1.04);
  }

  @media screen and (max-width: 500px) {
    transform: scale(1.27);

    &:hover {
    transform: scale(1.3);
  }
  }
`;

export const InputTask = styled.input`
  width: 300px;
  height: 40px;
  border: 2px solid rgba(209, 211, 212, 0.4);
  padding-left: 10px;
  margin-left: 35px;
  outline: none;

  &::placeholder {
    color: rgb(0, 0, 0);
    font-weight: 400;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    
    &::placeholder {
    color: rgb(0, 0, 0);
    font-weight: 400;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }
  }
`;

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 14px 0px;
`;

export const Listhud = styled.ul`
 padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  background: ${(props) => (props.$isfinished ? 'rgba(161, 221, 176, 0.8)' : 'rgba(228, 228, 228, 1)')};
  width: 500px;
  height: 7vh;
  display: flex;
  align-items: center;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 400;
  justify-content: center;
  margin-bottom: 2px;
  margin-top: 24px;
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;
 &:hover {
  background: rgba(232, 255, 139, 1);
  transform: scale(1.02);
  }
`;

export const Li = styled.li`
    list-style: none;
    color: rgb(0, 0, 0);
`;




