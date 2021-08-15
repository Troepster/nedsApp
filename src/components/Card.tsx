import * as React from 'react';
import { useEffect, useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { RaceSummary } from '../hooks/useGetNextRaces';
import { categoryIdMapper } from '../types';
import { differenceInSeconds } from 'date-fns';
import CountDownTimer from './CountDownTimer';

export const CARD_TEST_IDS = {
  CONTAINER: 'Card Container View',
  AMOUNT_TEXT: 'Card Amount Text',
};
interface Props {
  item: RaceSummary;
}
const Card: React.FC<Props> = ({ item }) => {
  const [startTime, setStartTime] = useState(
    differenceInSeconds(new Date(item.advertised_start.seconds * 1000), new Date()),
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setStartTime((v) => {
        return v - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  if (startTime < -60) {
    return null;
  } else {
    return (
      <View style={styles.container} testID={CARD_TEST_IDS.CONTAINER}>
        <View>
          <Text style={styles.titleText}>{item.meeting_name}</Text>
          <Text style={styles.drawText}>Race #{item.race_number}</Text>
          <CountDownTimer time={startTime} />
          {/*  <Text testID={CARD_TEST_IDS.AMOUNT_TEXT}>*/}
          {/*    {item.IsDiv1Unknown ? 'Unknown' : item.IsDiv1Estimated ? `${amount} (estimate)` : amount}*/}
          {/*  </Text>*/}
          {/*</View>*/}
        </View>
        <Image style={styles.productLogo} source={categoryIdMapper[item.category_id].image as ImageSourcePropType} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    backgroundColor: '#fff',
    marginTop: 32,
    padding: 24,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productLogo: {
    position: 'absolute',
    height: 75,
    width: 100,
    right: 20,
    opacity: 0.25,
  },
  titleText: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '600',
  },
  drawText: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '600',
  },
  normalText: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default Card;
