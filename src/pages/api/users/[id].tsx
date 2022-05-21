/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
export default (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jose Doe' },
  ];

  return response.json(users);
};
