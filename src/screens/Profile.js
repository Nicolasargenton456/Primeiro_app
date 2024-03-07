import { View , StyleSheet } from 'react-native';
import InfoProfile from '../components/InfoProfile';
import Perfil from '../assets/Homem.jpg';
import MyPosts from '../components/MyPosts';

export default function Profile() {
  return (

    <View style={{marginVertical: 32, marginHorizontal: 16, flex:1}}>
      <InfoProfile 
      image={Perfil} 
      publi={250} 
      followers={1587} 
      following={6} 
      Description="lorem lorem lorem "
      />
    <MyPosts 
    image={Perfil}
    />
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
