import React from 'react';
import { StatusBar, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

//styles
import {
  KeyboardView,
  MakerLine,
  TaskIcon,
  IconsView,
  ConfigIcon,
} from './styles';

function Maker() {
  const { navigate } = useNavigation();

  function handleRedirectMyTasks() {
    navigate('MyTasks');
  }
  function handleRedirectConfig() {
    navigate('Config');
  }
  return (
    <KeyboardView>
      <StatusBar barStyle="dark-content" />

      <IconsView>
        <MakerLine>App em construção 🚧</MakerLine>
        <TaskIcon onPress={handleRedirectMyTasks}>
          <Ionicons name="ios-list" size={50} color="#fff" />
        </TaskIcon>
        <Text>Tarefas</Text>
      </IconsView>
    </KeyboardView>
  );
}

export default Maker;
