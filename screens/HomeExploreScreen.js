import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList/ProductList';

const HomeExploreScreen = () => {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeExploreScreen;
