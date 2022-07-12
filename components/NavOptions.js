import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://www.seekpng.com/png/full/399-3991544_vector-cars-png-sedan-icon.png",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://www.freepnglogos.com/uploads/food-png/food-png-transparent-images-png-only-22.png",
        screen: "EatsScreen"
    }
];
const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                        <View>
                            <Image source={{ uri: item.image }} style={{ height: 100, width: 100, resizeMode: 'contain' }} />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                            <Image source={{uri:"https://img.icons8.com/fluency/48/000000/circled-right-2.png"}} style={{height:25,width:25}} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </>
    )
}

export default NavOptions