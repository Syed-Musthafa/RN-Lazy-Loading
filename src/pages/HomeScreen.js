import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'


import Product from '../components/Product';

import LottieView from 'lottie-react-native';

const HomeScreen = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)




    useEffect(() => {
        const apiUrl = "https://api.punkapi.com/v2/beers?page=1&per_page=10"
        fetch(apiUrl).then(res => res.json())
            .then(resJson => {
                setData(resJson)
            })
    }, [])


    const handleLoadMore = async () => {
        await setPage(page + 1,)
        setLoading(true)
        const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
        fetch(apiUrl).then(res => res.json())
            .then(resJson => {
                setData(data.concat(resJson))
                setLoading(true)
            })
    }


    const footerList = () => {
        return (
            <View style={{ flex:1, alignItems:'center' }}>
                
                <LottieView
                    style={{ width:100, height:100}}
                    source={require('./../asset/loading.json')}
                    autoPlay
                    loop
                    speed={0.5}
                />
            </View>
        )

    }




    return (
        <View style={{ flex: 1 }}>

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Product
                        key={item.id}
                        imageUrl={item.image_url}
                        name={item.name}
                        level={item.attenuation_level}
                    />
                )}
                onEndReached={handleLoadMore}
                ListFooterComponent={footerList}
            />

        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({})