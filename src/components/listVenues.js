
  import React, { useCallback, useMemo, useRef } from 'react';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
import { View,Text  , FlatList, StyleSheet,Image } from 'react-native';
import { baseUrl } from "../constants/constant";



const Card=({name,location,image,distance})=>{
  console.log('img',`${baseUrl + image  }` );
  return (<View style={styles.card}>
    <Image width={50} height={50} style={{borderRadius:10}}  source={{ uri: `${baseUrl + image  }` }}/>
    <View style={{flexDirection:'column',paddingLeft:5}}>
      <Text style={{fontWeight:'bold',fontSize:16,color:'black'}}>{name}</Text>
      <Text style={{fontWeight:'400',fontSize:14,color:'black'}}>{location}</Text>
      <Text style={{fontWeight:'400',fontSize:12,color:'black'}}>{distance} km</Text>
    </View>
  </View>);
}

  export default listVenues = ({data}) => {
    
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={data}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardList}
          renderItem={({item}) => (
            <Card name={item.name} distance={item.kilometres} image={item.logo} location={item.address} />
          )}
        />
      </View>
    );
  }

 
    const styles = StyleSheet.create({
      container: {
        height: 300,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
        flexDirection:'row-reverse'
      },
      cardList: {
        paddingHorizontal: 16,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      

    card:{
      flexDirection:'row',
      color:'#fff',
      margin:5,
      borderRadius: 8,
      borderColor:'grey',
    }
    });



 