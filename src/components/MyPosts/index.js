import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, View,StyleSheet, Image } from 'react-native';


export default function MyPosts({image}){
    return(
        <View style={styles.container}>
            <View style={styles.MyPosts}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="grid" size={32} color="black" />
                 </TouchableOpacity>
                 <TouchableOpacity>
                    <MaterialCommunityIcons name='movie-open-play-outline' size={32} color="black" />
                 </TouchableOpacity>
                 <TouchableOpacity>
                    <MaterialCommunityIcons name="account-outline" size={32} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.reta}>
                <Image style={styles.Image} source={image}/>
                <Image style={styles.Image} source={image}/>
                <Image style={styles.Image} source={image}/>
            </View>
            <View style={styles.reta}>
                <Image style={styles.Image} source={image}/>
                <Image style={styles.Image} source={image}/>
                <Image style={styles.Image} source={image}/>
            </View>
            <View style={styles.reta}>
                <Image style={styles.Image} source={image}/>
                <Image style={styles.Image} source={image}/>
                <Image style={styles.Image} source={image}/>
            </View>

        </View>
    )
}

const styles= StyleSheet.create({
    MyPosts:{
        justifyContent:"space-around",
        flexDirection:"row",
    },
    container:{
        marginTop:10,
    },
    Image:{
        width:125,
        height:130,
        flexDirection: 'row',
    },
    reta:{
    flexDirection: 'row',
    gap:7,
    marginTop:6,
     },
})