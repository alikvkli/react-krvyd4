import React, { useEffect, useState } from 'react';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const MyDocument = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    return async () => {
      const data = await fetch('https://dummyjson.com/products').then((res) =>
        res.json()
      );
      setProducts(data.products);
    };
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <View style={{ border: '1px solid #e60000', display: 'flex' }}>
            <View style={styles.section}>
              <Text>Marka</Text>
            </View>
            <View style={styles.section}>
              <Text>Ürün</Text>
            </View>
            <View style={styles.section}>
              <Text>Fiyat</Text>
            </View>
          </View>
          {products?.map((prod) => (
            <View
              key={prod.id}
              style={{ border: '1px solid #e60000', display: 'flex' }}
            >
              <View style={styles.section}>
                <Text>{prod.brand}</Text>
              </View>
              <View style={styles.section}>
                <Text>{prod.title}</Text>
              </View>
              <View style={styles.section}>
                <Text>{prod.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
export default MyDocument;
