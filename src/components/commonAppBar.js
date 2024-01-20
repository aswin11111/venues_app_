import { View,Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default CommonAppBar = () => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection: 'row'}}>
            <MaterialIcons
        name="location-on" // Adjust the icon name based on the desired icon
        size={34}
        color="black" // Adjust the icon color
        style={{paddingLeft:15,paddingTop:15}}
      />
            <View style={{flexDirection:'column',paddingTop:13}}>
                <Text style={{fontSize:20,fontWeight:'600',color:'black'}}>Kozhikode</Text>
                <Text style={{color:'black'}}>Kerala,India</Text>
            </View>
            
        </View>
        <MaterialIcons
        name="filter-list" // Adjust the icon name based on the desired icon
        size={34}
        color="black" // Adjust the icon color
        style={{paddingRight:15,paddingTop:15}}
      />
        </View>
    )
}