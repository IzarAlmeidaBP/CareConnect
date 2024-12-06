import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import chatIcon from '../../../assets/chaticon.png';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {
  const navigation = useNavigation();
  const [familyMembers] = useState([
    {
      id: 1,
      name: 'Maria Silva',
      age: 82,
      healthStatus: 'Saudável9',
      message: 'Hoje participou de uma atividade de jardinagem.',
      image: 'https://via.placeholder.com/200',
    },
  ]);

  const goToUserPage = () => {
    navigation.navigate('User');
  };

  const goToChatPage = () => {
    navigation.navigate('Chat');
  };

  const goToCartPage = () => {
    navigation.navigate('Cart');
  };

  const renderFamilyMemberItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.age}>Idade: {item.age} anos</Text>
        <Text style={styles.healthStatus}>Saúde: {item.healthStatus}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton} onPress={goToChatPage}>
        <Text style={styles.buttonText}>Enviar Mensagem</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={familyMembers}
        renderItem={renderFamilyMemberItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.membersList}
      />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={goToUserPage}>
          <Ionicons name="document-text" size={30} color="#EAF6FF" />
          <Text style={styles.navBarText}>Exames</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToChatPage}>
          <Image source={chatIcon} style={styles.icon} />
          <Text style={styles.navBarText}>Conversar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={goToCartPage}>
          <Ionicons name="call" size={30} color="#EAF6FF" />
          <Text style={styles.navBarText}>Ligar</Text>
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
  membersList: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#1E90FF',
  },
  age: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000',
  },
  healthStatus: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#000000',
  },
  message: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center',
    color: '#666666',
  },
  chatButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 25,
    padding: 12,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ProductScreen;
