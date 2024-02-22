import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Logo from "../../assets/logo.png"
import { Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center"
            }}
        >
            <Image style={{ height: 60, width: 200 }} source={Logo} />
            <View style={{ flexDirection: "row" }} />
            <TouchableOpacity>
                <Feather name="message-circle" size={24} color="black" />
            </TouchableOpacity><FontAwesome5 name="heart" size={24} color="black" />

        </View>
    )
}




