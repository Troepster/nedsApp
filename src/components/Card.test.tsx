import * as React from 'react';
import { render } from '@testing-library/react-native';
import Card, { CARD_TEST_IDS } from './Card';
import { RaceSummary } from '../hooks/useGetNextRaces';
import { categoryIdMapper } from '../types';

const mockData: RaceSummary = {
  advertised_start: {
    seconds: new Date().getTime() / 1000,
  },
  category_id: Object.keys(categoryIdMapper)[0],
  race_id: 'raceId',
  meeting_name: 'meetingName',
  race_number: 10,
};

describe('Card', () => {
  const createComponent = () => render(<Card item={mockData} />);
  it('should render the card', () => {
    const { getByTestId } = createComponent();
    expect(getByTestId(CARD_TEST_IDS.CONTAINER).type).toBe('View');
  });

  it('should not render a card if start time is more than 1 min ago', () => {
    mockData.advertised_start.seconds = mockData.advertised_start.seconds - 100;
    const { queryByTestId } = createComponent();
    expect(queryByTestId(CARD_TEST_IDS.AMOUNT_TEXT)).toBeNull();
  });
});
