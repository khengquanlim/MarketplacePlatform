import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import ProductCard from './ProductCard'; // Import ProductCard

const dummyProducts = Array.from({ length: 100 }, (_, index) => ({
  id: `${index + 1}`,
  name: `Product ${index + 1}`,
  price: `$${(index + 1) * 10}.00`,
  image: require('../../assets/favicon.png'),
}));

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const start = (page - 1) * 20;
      const end = page * 20;
      const newProducts = dummyProducts.slice(start, end);

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setPage((prevPage) => prevPage + 1);

      setLoading(false);
      if (newProducts.length < 20) {
        setHasMore(false);
      }
    }, 1000); // Simulate network delay
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{ marginVertical: 20 }} size="large" color="tomato" />;
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductCard name={item.name} price={item.price} image={item.image} />
      )}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContainer}
      onEndReached={loadProducts}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default ProductList;