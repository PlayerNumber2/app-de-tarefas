import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, CheckBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

//styles
import { Container, Text, DeleteItem } from './styles';

function TaskList({ data, handleDelete }) {
  const [isSelected, setSelection] = useState(false);

  //buscando e salvando o checkbox
  useEffect(() => {
    async function loadBox() {
      const boxStorage = await AsyncStorage.getItem('@checkBox');

      if (boxStorage !== null) {
        setSelection(JSON.parse(boxStorage));
      }
    }
    loadBox();
  }, []);

  useEffect(() => {
    async function saveBox() {
      await AsyncStorage.setItem('@checkBox', JSON.stringify(isSelected));
    }
    saveBox();
  }, [isSelected]);

  return (
    <Animatable.View useNativeDriver animation="bounceIn">
      <Container>
        <View>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text>{data.task}</Text>
        </View>
        <DeleteItem onPress={() => handleDelete(data)}>
          <Ionicons name="ios-trash" size={30} color="#FF0000" />
        </DeleteItem>
      </Container>
    </Animatable.View>
  );
}

export default TaskList;
