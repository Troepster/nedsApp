import * as React from 'react';
import { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useGetNextRaces } from '../hooks/useGetNextRaces';
import Card from '../components/Card';
import CategoryContext from '../context/CategoryContext';

const Home: React.FC = () => {
  const nextRaces = useGetNextRaces();
  const { selectedCategory } = useContext(CategoryContext);
  console.log(nextRaces);
  const data = Object.values(nextRaces.data?.data.race_summaries || {}).sort(
    (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
  );
  const filteredData = selectedCategory ? data.filter((v) => v.category_id === selectedCategory) : data;
  console.log(data);
  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData || []}
        keyExtractor={(item) => String(item.race_id)}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
