import { View , StyleSheet } from 'react-native';
import Header from '../components/Header';
import Storys from '../components/Storys';

export default function Home() {
  return (

    <View style={{marginVertical: 32, marginHorizontal: 16, flex:1}}>
      <Header />
      <Storys/>
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
