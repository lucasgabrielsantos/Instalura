import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    FlatList,
    TouchableOpacity,
    View,
    TextInput
} from "react-native";

import estilo from './estilo';

const Comentarios = ({ comentarios }) => {

    const [estadoComentarios, setComentarios] = useState(comentarios)

    const adicionarComentario = () => {
        console.warn("Comentário Realizado :)");
        campoInput.clear();
        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "Lucas Gabriel "

        }

        setComentarios([...estadoComentarios, novoComentario]);

    }

    let campoInput;
    let conteudoCampoInput = "";
    return (
        <Fragment>

            <FlatList
                data={estadoComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View
                        style={estilo.inline}>
                        <Text>{item.userName}</Text>
                        <Text>{item.text}</Text>
                    </View>
                }
            />
            <View
                style={estilo.inline}>
                <TextInput
                    ref={TextInput => campoInput = TextInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={"Deixe seu comentário..."}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity
                    onPress={adicionarComentario}>

                    <Image source={require("../../../res/img/send.png")}
                        style={estilo.imgSend} />

                </TouchableOpacity>
            </View>
        </Fragment>
    );
};


export default Comentarios;