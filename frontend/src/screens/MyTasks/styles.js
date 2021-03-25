import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #fff;
`;

export const TitleLine = styled.Text`
  /* margin-top: 40px; */
  padding-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #4682b4;
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #00bfff;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  right: 25px;
  bottom: 25px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const ModalTitle = styled.Text`
  margin-left: 15px;
  font-size: 24px;
  color: #4682b4;
`;

export const ModalHeader = styled.View`
  margin-left: 10px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ModalBody = styled.View`
  margin-top: 15px;
`;

export const ModalInput = styled.TextInput`
  font-size: 15px;
  margin: 10px 30px;
  margin-top: 20px;
  padding: 15px;
  height: 150px;
  text-align-vertical: top;
  border: 2px solid #4682b4;
  color: #000;
  border-radius: 10px;
`;

export const AddTaskButtom = styled.TouchableOpacity`
  background-color: #00bfff;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 50px;
  width: 50%;
  border-radius: 10px;
  padding: 15px;
`;

export const ModalText = styled.Text`
  margin-left: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
