import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import carrinhoIcon from '../../../assets/carrinhoicon.png'; // Substitua pelo ícone que você usa
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const addMessageToChat = (text, sender) => {
    const newMessage = { text, sender };
    setChat((prevChat) => [...prevChat, newMessage]);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      addMessageToChat(message, 'user');
      setMessage('');

      // Mensagem automática do bot
      setTimeout(() => {
        addMessageToChat(
          'Em breve seu dependente irá mandar mensagem de volta, assim que ele ver.',
          'bot',
        );
      }, 1000);
    }
  };

  const goToHomePage = () => {
    navigation.navigate('ProductScreen');
  };

  const goToCartPage = () => {
    navigation.navigate('Cart');
  };

  const goToUserPage = () => {
    navigation.navigate('User');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {chat.map((item, index) => (
          <View
            key={index}
            style={[
              styles.message,
              item.sender === 'bot' ? styles.botMessage : styles.userMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem"
          value={message}
          onChangeText={(text) => setMessage(text)}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={goToHomePage}>
          <Entypo name="home" size={30} color="#EAF6FF" />
          <Text style={styles.navBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToCartPage}>
          <Ionicons name="call" size={30} color="#EAF6FF" />
          <Text style={styles.navBarText}>Ligar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToUserPage}>
          <Ionicons name="document-text" size={30} color="#EAF6FF" />
          <Text style={styles.navBarText}>Exames</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
  },
  chatContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  message: {
    maxWidth: '80%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#1C60A0',
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#1E90FF',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#1E90FF',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#EAF6FF',
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
  },
  navBarButton: {
    alignItems: 'center',
    padding: 10,
  },
  navBarText: {
    color: '#EAF6FF',
    fontSize: 12,
    marginTop: 5,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#EAF6FF',
  },
});
export default Chat;
