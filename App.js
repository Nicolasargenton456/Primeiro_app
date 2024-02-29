import { View , StyleSheet } from 'react-native';
import InfoProfile from './src/components/InfoProfile';
import Perfil from './src/assets/Homem.jpg';


export default function App() {
  return (

    <View style={{marginVertical: 32, marginHorizontal: 16, flex:1}}>
      <InfoProfile 
      image={Perfil} 
      publi={250} 
      followers={1587} 
      following={6} 
      Description="lorem lorem lorem "
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
