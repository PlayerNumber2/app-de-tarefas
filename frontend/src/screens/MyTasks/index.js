import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Modal, StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

//components
import TaskList from '../../components/TaskList';

//styles
import {
  AddButton,
  AddTaskButtom,
  KeyboardView,
  ModalBody,
  ModalHeader,
  ModalInput,
  ModalTitle,
  Text,
  TitleLine,
} from './styles';

function Maker() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  // buscando todas as tarefas ao iniciar o app
  useEffect(() => {
    async function loadTasks() {
      const taskStorage = await AsyncStorage.getItem('@task');

      if (taskStorage) {
        setTask(JSON.parse(taskStorage));
      }
    }
    loadTasks();
  }, []);

  // salvando caso tenha alguma tarefa alterada
  useEffect(() => {
    async function saveTasks() {
      await AsyncStorage.setItem('@task', JSON.stringify(task));
    }
    saveTasks();
  }, [task]);

  function handleAdd() {
    if (input === '') return;

    const data = {
      key: input,
      task: input,
    };
    setTask([...task, data]);
    setOpen(false);
    setInput('');
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    setTask(find);
  });

  const { navigate } = useNavigation();
  function handleRedirectHome() {
    navigate('Home');
  }

  return (
    <KeyboardView>
      <StatusBar barStyle="dark-content" />

      <ModalHeader style={{ marginTop: 40 }}>
        <TouchableOpacity onPress={handleRedirectHome}>
          <Ionicons
            style={{ marginLeft: 15, marginRight: 15 }}
            name="arrow-back"
            size={35}
            color="#FF0000"
          />
        </TouchableOpacity>
        <TitleLine>Minhas Tarefas</TitleLine>
      </ModalHeader>

      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => (
          <TaskList data={item} handleDelete={handleDelete} />
        )}
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <ModalHeader>
          <TouchableOpacity onPress={() => setOpen(false)}>
            <Ionicons
              style={{ marginLeft: 15, marginRight: 15 }}
              name="arrow-back"
              size={35}
              color="#FF0000"
            />
          </TouchableOpacity>
          <ModalTitle>Nova tarefa</ModalTitle>
        </ModalHeader>

        <Animatable.View useNativeDriver animation="fadeInUp">
          <ModalBody>
            <ModalInput
              multiline={true}
              autoCorrect={false}
              placeholder="O que preciso fazer hoje?"
              value={input}
              onChangeText={(texto) => setInput(texto)}
            />
          </ModalBody>
          <AddTaskButtom onPress={handleAdd}>
            <Text>Adicionar</Text>
          </AddTaskButtom>
        </Animatable.View>
      </Modal>

      <AddButton
        useNativeDriver
        animation="bounceInUp"
        duration={1500}
        onPress={() => setOpen(true)}
      >
        <Ionicons name="ios-add" size={35} color="#fff" />
      </AddButton>
    </KeyboardView>
  );
}

export default Maker;
