
import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
} from "react-native"
import { Cabecalho } from './src/Components/Cabecalho/';
import { Foto } from './src/Components/Foto';
import { Comentarios } from './src/Components/Comentarios'
import lerFotos from './src/Components/api/feed';

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, [])

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho
              nomeUsuario={item.userName}
              urlImage={item.userURL} />
            <Foto
              urlFoto={item.userURL}
              descricao={item.description}
              qntLikes={item.likes}
            />

            <Comentarios
              comentarios={item.comentarios}
            />
          </Fragment>}
      />
    </ScrollView>
  )
};
export default App;
