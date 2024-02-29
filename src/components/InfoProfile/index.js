import { View, Text, Image, StyleSheet } from "react-native";




export default function InfoProfile({ image, publi, followers ,following, Description }) {
 return(
 <View style={styles.container}>
    <Image style={styles.ImagemPerfil} source={image}/>
    <View style={styles.info}>
    <View style={styles.count}>
     <Text> {publi}</Text>
     <Text style={styles.bold}>Publicações</Text>
    </View>
    <View style={styles.count}>
     <Text>{followers}</Text>
     <Text style={styles.bold}>Seguidores</Text>
    </View>
    <View style={styles.count}>
     <Text>{following}</Text>
     <Text style={styles.bold}>Seguindo</Text>
    </View>
 </View>
 </View>
)
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
       
    },
    info:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        gap:16,
    },
    count:{
        alignItems:"center",
        justifyContent:"center",

    },
    bold:{
        fontWeight:"700",
    },
    ImagemPerfil:{
        width:100,
        height:100,
        borderRadius:50,
    }

    
})