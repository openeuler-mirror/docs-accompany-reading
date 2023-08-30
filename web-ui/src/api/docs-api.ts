import { request } from '@/shared/axios';
import type { AxiosResponse } from '@/shared/axios';

interface rankParams {
  start: string;
  end: string;
}

export function getRank(rankParams: rankParams) {
  const url = '/api/query/issueScore';
  return request
    .get(url, {
      params: {
        community: 'openEuler',
        start_date: rankParams.start,
        end_date: rankParams.end,
      },
    })
    .then((res: AxiosResponse) => res.data);
}
