import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput as PaperTextInput } from 'react-native-paper'; // Importando componentes do react-native-paper

export default function AuthScreens() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToTelaCadastro = () => {
    navigation.navigate('TelaCadastro');
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.headerText}>Bem-Vindo(a)</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <PaperTextInput
          placeholder="Digite seu email..."
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
        <PaperTextInput
          placeholder="Sua senha"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
        />
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('ProductScreen')}
        >
          Acessar
        </Button>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={goToTelaCadastro}
        >
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headerText: {
    color: '#1E90FF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerForm: {
    backgroundColor: '#1E90FF',
    borderRadius: 15,
    padding: 20,
    width: '80%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 10,
    alignSelf: 'center',
  },
  registerText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
