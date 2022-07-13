/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import axios from 'axios';

import {TextInput, StyleSheet, View} from 'react-native';
import {useQuery} from '../tanstackreact-query.js';
export default function Search({searchMovie}) {
  const [SearchTerm, setSearchTerm] = useState('');

  const {isLoading, isError, data, error} = useQuery(
    ['Search', SearchTerm],
    async ({queryKey}) => {
      if (queryKey[1] === '') {
        return 'Please Enter Query';
      } else {
        const {data} = await axios(
          `https://api.themoviedb.org/3/search/movie?api_key=4824566917484418aeb2b02655ec5b44&language=en-US&query=${queryKey[1]}`,
        );
        searchMovie(data);
        return data;
      }
    },
  );

  return (
    <View>
      <TextInput
        style={styles.search}
        value={SearchTerm}
        placeholder="Search"
        placeholderTextColor="black"
        onChangeText={searchValue => {
          setSearchTerm(searchValue);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 15,
    color: 'black',
    height: 45,
    margin: 5,
    padding: 15,
  },
});
