import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';




export default function Post({profileImage, postImage, profileName, description}) {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                
                <View style={styles.cabecalhoFoto}>
                    <Image style={styles.Image} source={profileImage} />
                    <Text>{profileName}</Text>
                </View>
                
                <View>
                    <Feather name="more-vertical" size={24} color="black" />
                </View>
            </View>
            
            <View>
                <Image style={styles.imageTwo} source={postImage} />
            </View>
           
            <View style={styles.interacao}>
                <View style={{flexDirection: "row", gap: 8}}>
                    <Feather name="heart" size={26} color="black" />
                    <AntDesign name="message1" size={24} color="black" />
                    <FontAwesome name="paper-plane-o" size={24} color="black" />
                </View>
            
                <View>
                    <Octicons name="bookmark" size={24} color="black" />
                </View>
            </View>
            
            <Text>{description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Image:{
        width:60,
        height:60,
        borderRadius:100,
    },
    imageTwo:{
        marginTop:5,
        width: "100%",
        height:400,

    },
    container:{
        marginTop: 20,
    },

    cabecalho: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cabecalhoFoto: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        gap: 8,
    },
    interacao: {
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 5,
        
    }
})