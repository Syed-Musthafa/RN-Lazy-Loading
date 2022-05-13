import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'
import React from 'react'

const COLORS = {
    primary: "",
    secondary: "#3B3B3B",

    primary1: "#2D2D3A",
    secondary1:  "#393948",

    white: "#fff",
    lightGreen: "#4BEE70",

}

const Product = ({ name, imageUrl, price, level, productId, onPress }) => {
    return (
        <View
           key={productId}
            style={{ width: "100%", padding: 15, ...styles.shadow }}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: COLORS.white,
                    width: "100%",
                   
                    borderRadius: 10,
                    flexDirection:"row",
                    ...styles.shadow
                }}>
                <View style={{   padding:10, backgroundColor:"lightgray",  borderRadius: 10 }} >

                    <Image
                        source={{ uri : imageUrl }}
                        resizeMode="contain"
                        style={{ width: 130, height: 110, borderRadius: 10 }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            top: 15,
                            left: 10,
                            backgroundColor: COLORS.transparentBlack1,
                            width: 60,
                            height: 20,
                            borderBottomLeftRadius: 20,
                            borderTopRightRadius: 10

                        }}
                    >
                       
                    </View>
                </View>

                <View style={{ width:"60%"}}>
                    <View style={{ padding: 10, marginTop:10 }}>
                        <Text style={{ fontWeight: 'bold', color: COLORS.black, fontSize: 20 }}>{name}</Text>
                        <Text style={{ fontSize: 20, color: COLORS.black, }}>Level : <Text style={{ fontSize: 20, color: "#aaa", }}>{level}</Text></Text>


                 

                    </View>


                </View>

            </TouchableOpacity>

        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#333333',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
    
        elevation: 10,
      },
})