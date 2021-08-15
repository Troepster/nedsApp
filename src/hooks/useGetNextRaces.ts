import axios from 'axios';
import { useQuery } from 'react-query';

export interface RaceSummary {
  advertised_start: {
    seconds: number;
  };
  category_id: string;
  race_id: string;
  meeting_name: string;
  race_number: number;
}

export type RaceSummaries = Record<string, RaceSummary>;
interface Response {
  data: {
    next_to_go_ids: [];
    race_summaries: RaceSummaries;
  };
  message: string;
  status: 200;
}
const api = 'https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=20';
const getNextRaces = async () => {
  const nextRaces = await axios.get<Response>(api);
  return nextRaces.data;
};
export const useGetNextRaces = () => {
  return useQuery('nextRaces', getNextRaces, { refetchInterval: 60000 });
};
