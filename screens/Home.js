/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieCard from '../components/MovieCard';
import {useQuery} from '../tanstackreact-query.js';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import Search from '../components/Search';
export default function Home() {
  const [FavouriteMoviesArr, setFavouriteMoviesArr] = useState([]);
  const storeFavouriteMovies = async value => {
    await AsyncStorage.setItem('FavouriteMovies', JSON.stringify(value));
  };
  const handleAddMovie = async movie => {
    let data = FavouriteMoviesArr.filter(e => e.id !== movie.id);
    setFavouriteMoviesArr([movie, ...data]);
    storeFavouriteMovies(FavouriteMoviesArr);
  };

  const MoviesFilteration = [
    {id: 1, name: 'top_rated'},
    {id: 2, name: 'upcoming'},
    {id: 3, name: 'now_playing'},
  ];
  const [MoviesFilter, setMoviesFilter] = useState('top_rated');
  const [movies, setMovies] = useState([]);

  const handleSearch = data => {
    setMovies(data.results);
  };
  const {isLoading, isError, data, error} = useQuery(
    ['Movie', MoviesFilter],
    async ({queryKey}) => {
      const {data} = await axios(
        `https://api.themoviedb.org/3/movie/${queryKey[1]}?api_key=4824566917484418aeb2b02655ec5b44&language=en-US`,
      );
      setMovies(data.results);
      return data;
    },
  );
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error! {error.message}</Text>;
  }
  return (
    <>
      <Search searchMovie={handleSearch} />
      <ScrollView horizontal={true} style={styles.container}>
        {MoviesFilteration.map(movie => {
          return (
            <TouchableOpacity
              style={styles.button}
              key={movie.id}
              onPress={() => setMoviesFilter(movie.name)}>
              <Text style={styles.textColor}>{movie.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <FlatList
        data={movies}
        renderItem={({item, index}) => (
          <MovieCard movie={item} handleAddMovie={handleAddMovie} />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 7,
    textAlign: 'center',
    marginLeft: 7,
    marginBottom: 15,
    height: 40,
    alignContent: 'center',
  },
  textColor: {
    color: 'black',
  },
  container: {
    alignSelf: 'center',
  },
});
