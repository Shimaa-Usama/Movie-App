/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
const ImageURL = 'https://image.tmdb.org/t/p/w500';

const MovieItem = ({movie}) => {
  return (
    <View style={styles.container}>
      <View style={styles.MovieBody}>
        <Image
          style={styles.MovieImg}
          source={{
            uri: `${ImageURL}${movie.poster_path}`,
          }}
        />
        <Text style={styles.MovieTitle}>{movie.original_title}</Text>
      </View>
    </View>
  );
};
export default MovieItem;

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
});
