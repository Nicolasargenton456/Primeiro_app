import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Logo from "../../assets/logo.png"
import { Feather, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View
        style={styles.container}>
        <Image style={{width:200, height:60}} source={Logo}/>
        <View style={styles.icon}>
            <TouchableOpacity>
                <Feather name="heart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons style={styles.icon} name="facebook-messenger" size={24} color="black"/>
            </TouchableOpacity>
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center"  
    },
    icons:{flexDirection:"rom"},
    icons:{marginLeft:8}

})
