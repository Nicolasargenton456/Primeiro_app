import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Homem from"../../assets/Homem.jpg";
import Mulher from"../../assets/Mulher.jpg";
import Story from "../Story";



export default function Storys(){
    return ( 
    <ScrollView 
        contentContainerStyle={ styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          <Story image={Homem} />
          <Story image={Mulher} />
          <Story image={Homem} />
          <Story image={Mulher} />
          <Story image={Homem} />
          <Story image={Mulher} />
        </ScrollView>
        )
}
const styles = StyleSheet.create({
    container: {
        gap:8,
        height:100,
    },
    
});