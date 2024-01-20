import { View, Dimensions,Text, Image } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { baseUrl } from "../constants/constant";


const Marker = ({logo,kilometer, top, left, right, bottom}) => {
    console.log();
    return (
        <View style={{position:'absolute',top:top, left:left,right:right,bottom:bottom,margin:10, alignItems:'center',justifyContent:'center', }}>
          <Image width={50} height={50} style={{borderRadius:50}}  source={{ uri: `${baseUrl + logo  }` }}/>
          <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>{kilometer} Km</Text>
        </View>
    )
}

export default nearByView = ({data}) => {
    const window = Dimensions.get('window');
    const height = window.height;
    const width = window.width;

   console.log('image',data);
    return (
        <View style={{ flex: 1, alignItems: 'center', padding:20, height: 500, flexShrink: 0 }}>
             <View style={{ borderWidth: 1, borderColor: 'black', height: 370, width: 370, borderRadius: 300, position:'relative', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
             <View style={{ borderWidth: 1, borderColor: 'black', height: 300, width: 300, borderRadius: 300,position:'relative', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
             <View style={{ borderWidth: 1, borderColor: 'black', height: 230, width: 230, borderRadius: 300,position:'relative', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
            <View style={{ borderWidth: 1, borderColor: 'black', height: 160, width: 160, borderRadius: 300,position:'relative', alignItems: 'center', justifyContent: 'center', padding: 30 }}>
                <FontAwesome
                    name="user-circle-o" // Adjust the icon name based on the desired icon
                    size={34}
                    color="black" // Adjust the icon color
                    // style={{ paddingLeft: 15, paddingTop: 15 }}
                />
               
            </View>
            <Marker kilometer={data[0].kilometres} top={10} logo={data[0].logo}/>
            </View>
            <Marker kilometer={data[1].kilometres} left={10} logo={data[1].logo}/>
            </View>
            <Marker kilometer={data[2].kilometres} right={10} logo={data[2].logo}/>
            </View>
        </View>
    )
}