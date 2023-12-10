import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import httpservice from '../../routes/http';

export default function CreateAccount() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const onSubmit = async () => {
    const user = { cpf, name, email, password, confirmpassword };
    const result = await httpservice.createUser(user);
    const data = await result.json();
    ToastAndroid.show(data.message, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.headerText}>Crie sua Conta</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>CPF</Text>
        <TextInput
          placeholder="Digite seu CPF..."
          style={styles.input}
          value={cpf}
          onChange={(event) => {
            setCpf(event.nativeEvent.text);
          }}
        />
        <Text style={styles.title}>Nome Completo</Text>
        <TextInput
          placeholder="Digite seu nome completo..."
          style={styles.input}
          value={name}
          onChange={(event) => {
            setName(event.nativeEvent.text);
          }}
        />
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu email..."
          style={styles.input}
          value={email}
          onChange={(event) => {
            setEmail(event.nativeEvent.text);
          }}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChange={(event) => {
            setPassword(event.nativeEvent.text);
          }}
        />
        <Text style={styles.title}>Confirme sua senha</Text>
        <TextInput
          placeholder="Confirme sua senha"
          style={styles.input}
          secureTextEntry={true}
          value={confirmpassword}
          onChange={(event) => {
            setConfirmPassword(event.nativeEvent.text);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4EEE7',
  },
  containerHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headerText: {
    color: '#72AB86',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerForm: {
    backgroundColor: '#72AB86',
    borderRadius: 15,
    padding: 20,
    width: '80%',
  },
  title: {
    color: '#F4EEE7',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F4EEE7',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F4EEE7',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#72AB86',
    fontWeight: 'bold',
  },
});
