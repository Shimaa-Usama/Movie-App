/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import FavouriteMovie from '../components/FavouriteMovie';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Featured() {
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
    <FlatList
      data={items}
      renderItem={({item, index}) => (
        <FavouriteMovie movie={item} handleDeleteMovie={handleDeleteMovie} />
      )}
      keyExtractor={item => item.id}
    />
  );
}
