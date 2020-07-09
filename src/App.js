import React from 'react';
import './App.css';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`


const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px;

  width: 900px;
`
const Body = styled.div`
  display: flex;
  /* temporary */
  justify-content: space-between; 

  width: 900px;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;

  button {
    width: 100px;
  }
  input {
    width: 100%;
  }
`

const Content = styled.div`

`

const History = styled.div`

`

const MultiSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Categories = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  row-gap: 10px;
`

const categories = [
  'Anatomia',
  'Animais',
  'Arquitetura',
  'Veículos',
  'Personagens',
  'Alimentos e bebidas',
  'Mobílias',
  'Indústria',
  'Natureza'
]

function MultiSelection({title, options}) {
  return (
    <MultiSelectionContainer>
      <b>{title}</b>
      {
        options.map(option => (
          <label>
            {option}
            <input type="checkbox"/>
          </label>
        ))
      }
    </MultiSelectionContainer>
  )
}

function App() {
  return (
    <Container>
      <Header>
        <img alt="logo" src="https://via.placeholder.com/100x50"/>
        <img alt="profile" src="https://via.placeholder.com/50"/>
      </Header>
      <Body>
        <Sidebar>
          filterbar
          <button type="button" onClick={() => console.log('upload')}>
            Upload
          </button>
          <input placeholder="Buscar"/>
          <MultiSelection title="Equipes" options={["Personal", 
            "Real2U", "Equipe XY"]}/>
          <MultiSelection title="Tipo de arquivo" options={["Modelo 3D", 
            "Materiais"]}/>
          <Categories>
            {
              categories.map(category => (
                <span>
                  {category}
                </span>
              ))
            }
          </Categories>
        </Sidebar>
        <Content>
          content
        </Content>
        <History>
          history
        </History>
      </Body>
    </Container>
  );
}

export default App;
