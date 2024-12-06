import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Exames = () => {
  const navigation = useNavigation();

  const goToHomePage = () => {
    navigation.navigate('ProductScreen');
  };

  const goToCartPage = () => {
    navigation.navigate('Cart');
  };

  const goToChatPage = () => {
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.examsContainer}>
        <Text style={styles.title}>Lista de Exames</Text>
        <View style={styles.examItem}>
          <Text style={styles.examText}>Exame de Sangue</Text>
          <TouchableOpacity style={styles.examButton}>
            <Text style={styles.examButtonText}>Ver Resultados</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.examItem}>
          <Text style={styles.examText}>Exame de Urina</Text>
          <TouchableOpacity style={styles.examButton}>
            <Text style={styles.examButtonText}>Ver Resultados</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.examItem}>
          <Text style={styles.examText}>Ressonância Magnética</Text>
          <TouchableOpacity style={styles.examButton}>
            <Text style={styles.examButtonText}>Ver Resultados</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.examItem}>
          <Text style={styles.examText}>Raio-X</Text>
          <TouchableOpacity style={styles.examButton}>
            <Text style={styles.examButtonText}>Ver Resultados</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={goToHomePage}>
          <Ionicons name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToCartPage}>
          <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToChatPage}>
          <Ionicons name="chatbubbles" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  examsContainer: {
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 20,
    textAlign: 'center',
  },
  examItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  examText: {
    fontSize: 18,
    color: '#1E90FF',
  },
  examButton: {
    marginTop: 10,
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  examButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10,
  },
  navBarButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default Exames;
