import { useState } from "react";
import { v4 as keygen } from "uuid";
import {
  Container,
  ListBox,
  AddButton,
  InputTask,
  HeaderList,
  List,
  Li,
  Listhud,
} from "./style.js";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import styled from "styled-components";

const RocketIcon = styled(FaRocket)`
  color: rgba(79, 15, 197, 1);
  cursor: pointer;
  &:hover {
    color: #401097;
    transform: scale(1.04);
  }
`;

const TrashIcon = styled(FaRegTrashAlt)`
  color: rgba(255, 0, 0, 1);
  cursor: pointer;
  &:hover {
    color: #b13535;
    transform: scale(1.04);
  }
`;

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function inputChange(event) {
    setInput(event.target.value);
  }

  function clickButton() {
    if (!input.trim()) return; // Evita tarefas vazias
    setList([...list, { id: keygen(), task: input, finished: false }]);
    setInput(""); // Limpa o input
  }

  function checkTask(id) {
    const listCheck = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(listCheck);
  }

  function deletTask(id) {
    const listDelet = list.filter((item) => item.id !== id);
    setList(listDelet);
  }

  return (
    <Container>
      <ListBox>
        <HeaderList>
          <InputTask
            value={input}
            onChange={inputChange}
            placeholder="O que tenho que fazer..."
          />
          <AddButton onClick={clickButton}>Adicionar</AddButton>
        </HeaderList>
        <Listhud>
          {list.map((item) => (
            <List $isfinished={item?.finished} key={item.id}>
              <RocketIcon onClick={() => checkTask(item.id)} />
              <Li>{item.task}</Li>
              <TrashIcon onClick={() => deletTask(item.id)} />
            </List>
          ))}
        </Listhud>
      </ListBox>
    </Container>
  );
}

export default App;
