import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CategoryContext from '../context/CategoryContext';
import { categoryIdMapper } from '../types';

const BottomTabBar: React.FC = () => {
  const { selectedCategory, toggleCategory } = useContext(CategoryContext);
  return (
    <View style={styles.container}>
      {Object.keys(categoryIdMapper).map((v) => (
        <TouchableOpacity key={v} style={styles.tabContainer} onPress={() => toggleCategory(v)}>
          <Text
            style={{
              color: selectedCategory === v ? 'darkblue' : 'black',
              fontWeight: selectedCategory === v ? '700' : 'normal',
              ...styles.tabText,
            }}
          >
            {categoryIdMapper[v].title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 84,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 34,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  tabText: {
    textAlign: 'center',
  },
});
