import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Homem from"../../assets/Homem.jpg";
import Mulher from"../../assets/Mulher.jpg";



export default function Storys(){
    return ( 
    <ScrollView 
        contentContainerStyle={ styles.container}
        horizontal
         
         showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
          <Image
          style={styles.story}
          source={{
            uri:"data:image/jpeg;base64,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"
          }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          style={styles.story}
          source={{
            uri:"data:image/jpeg;base64,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"
          }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
      
          <Image
          style={styles.story}
          source={{
            uri:"data:image/jpeg;base64,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"
          }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
           <Image 
          style={styles.story}
          source={{
            uri:"https://static1.minhavida.com.br/articles/64/fe/df/e8/mediabox-pessoas-sempre-insatisfeitas-orig-1.jpg"
          }}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          style={styles.story}
          source={{
            uri:"data:image/jpeg;base64,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"
          }}
          />
          </TouchableOpacity>
        </ScrollView>
        )
}
const styles = StyleSheet.create({
    container: {
        gap:8,
        height:100,
    },
    story: {width:100, height:100, borderRadius:50},
})