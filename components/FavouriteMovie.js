/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
const ImageURL = 'https://image.tmdb.org/t/p/w500';

const FavouriteMovie = ({movie, handleDeleteMovie}) => {
  return (
    <View style={styles.container}>
      <View style={styles.MovieBody}>
        <Image
          style={styles.MovieImg}
          source={{
            uri: `${ImageURL}${movie.poster_path}`,
          }}
        />
        <View style={styles.rowContainer}>
          <Text style={styles.MovieTitle}>{movie.original_title}</Text>
          <TouchableOpacity
            style={styles.favouriteBtn}
            onPress={() => {
              handleDeleteMovie(movie);
            }}>
            <Text style={styles.txt}>Remove🗑</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default FavouriteMovie;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: 'black',
  },
  MovieImg: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  MovieTitle: {fontSize: 16, fontWeight: 'bold', color: 'white', padding: 10},
  MovieBody: {marginBottom: 10},
  favouriteBtn: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    marginTop: 10,
  },
  txt: {
    color: 'black',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
