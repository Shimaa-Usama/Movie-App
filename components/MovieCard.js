/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import React from 'react';
const ImageURL = 'https://image.tmdb.org/t/p/w500';
const MovieCard = ({movie, handleAddMovie}) => {
  return (
    <View style={styles.container}>
      <View style={styles.MovieBody}>
        <Image
          style={styles.MovieImage}
          source={{
            uri: `${ImageURL}${movie.poster_path}`,
          }}
        />
        <Text style={styles.MovieTitle}>{movie.original_title}</Text>
        <TouchableOpacity
          style={styles.favouriteBtn}
          onPress={() => {
            handleAddMovie(movie);
          }}>
          <Text style={styles.heartTxt}>&#10084;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MovieCard;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: '#282A28',
    borderRadius: 20,
  },
  MovieImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  MovieTitle: {fontSize: 16, fontWeight: 'bold', color: 'white', padding: 10},
  MovieBody: {marginBottom: 10},
  favouriteBtn: {
    backgroundColor: 'white',
    width: 30,
    borderRadius: 10,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    left: 280,
    bottom: 5,
  },
});
