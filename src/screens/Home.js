import { ScrollView, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import Storys from '../components/Storys';
import Post from '../components/Post';
import Perfil from '../assets/Homem.jpg'
import Postagem from '../assets/logo.png'



export default function Home() {
  return (

    <ScrollView style={{ marginVertical: 32, marginHorizontal: 16, }}>
      <Header />
      <Storys />

      <Post
        profileImage={Perfil}
        postImage={Postagem}
        profileName="Fulana da silva"
        description="lorem" 
      />

      <Post
        profileImage={Perfil}
        postImage={Postagem}
        profileName="Fulana da silva"
        description="lorem" 
      />

      <Post
        profileImage={Perfil}
        postImage={Postagem}
        profileName="Fulana da silva"
        description="lorem" 
      />


    </ScrollView>
  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
