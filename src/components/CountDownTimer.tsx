import { StyleSheet, Text } from 'react-native';
import * as React from 'react';

interface Props {
  time: number;
}
const CountDownTimer: React.FC<Props> = ({ time }) => {
  const hour = time > 0 ? Math.floor(time / 3600) : -0;
  const minute = time > 0 ? Math.floor(time / 60) : -0;
  const second = time % 60;
  const countDown =
    time < 0
      ? `Started ${-1 * time} seconds ago`
      : `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${
          second < 10 ? `0${second}` : second
        }`;
  return <Text style={styles.normalText}>{countDown}</Text>;
};

const styles = StyleSheet.create({
  normalText: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default CountDownTimer;
