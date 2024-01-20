import { View , StyleSheet, TouchableOpacity, Text} from "react-native"

 export default CategoryCard =({title,isSelected})=> {
    return(  
        <View style={styles.category} >
        <Text style={isSelected? styles. selectedText:styles.text}>{title}</Text>   
      </View>
    )
 }

 const styles = StyleSheet.create({
    category: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor:  'grey',
      flexDirection:'row',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text: {
      fontWeight: '900',
      textAlign: 'center',
      fontSize: 12,
      color:'#737b7d'
    },
    selectedText: {
      color: 'black',
      fontWeight: '900',
      textAlign: 'center',
      fontSize: 12,
    },
    icon: {
      fontSize: 16,
     color:'#737b7d'
    },
  });
  