import { View ,ScrollView, TouchableOpacity} from "react-native";
import CategoryCard from "./categoryCard";
import { useState } from "react";
// import { ScrollView } from "react-native-gesture-handler";

var data=[
    'Football',
    'Cricket',
    'Badminton',
    'Tennis',
    'Hockey',
    'BaseBall'
];

export default CategoryRow = () => {
     const [currentTitle,setCurrentTitle]=useState(data[0]);

    return(
        <View style={{ width:'100%',height:60,justifyContent:'center'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flex:1}} contentContainerStyle={{alignItems:"center", gap:8,paddingHorizontal:16,paddingVertical:10, }}>
        {data.map((title) => (
         <TouchableOpacity onPress={()=>{
            setCurrentTitle(title)
         }}>
                    <CategoryCard title={title} isSelected={title==currentTitle}/>
         </TouchableOpacity>   

      ))}
        </ScrollView>
        </View>
    )
}