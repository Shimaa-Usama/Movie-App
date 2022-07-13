/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import FavouriteMovie from '../components/FavouriteMovie';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favourite() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFavouriteMovies();
  }, []);
  const getFavouriteMovies = async () => {
    const moviesData = JSON.parse(
      await AsyncStorage.getItem('FavouriteMovies'),
    );
    setItems(moviesData);
  };
  const handleDeleteMovie = async movie => {
    items.splice(items.indexOf(movie), 1);
    let newItems = [...items];
    await AsyncStorage.setItem('FavouriteMovies', JSON.stringify(newItems));
    setItems(newItems);
    let x = await AsyncStorage.getItem('FavouriteMovies');
    console.log('x', x);
  };
  return (
    <View style={styles.container}>
      {items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={({item}) => (
            <FavouriteMovie
              movie={item}
              handleDeleteMovie={handleDeleteMovie}
            />
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Image
          style={styles.img}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ21x-eXpgCZ-kZ3YSDKy3uPdiOmQfTmob9Q&usqp=CAU',
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
