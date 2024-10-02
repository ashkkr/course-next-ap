// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type SignUpResponse = {
  message: string;
  error: string;
};

type User = {
  username: string;
  password: string;
};

var users: User[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignUpResponse>
) {
  try {
    const reqbody = req.body;
    const newUser: User = {
      username: reqbody.username,
      password: reqbody.password,
    };
    const existingUser = users.find((u) => u.username == newUser.username);
    if (existingUser) throw new Error('User already exists. Please sign in');
    console.log(users.length);
    users.push(newUser);
    res.status(201).json({
      message: `User ${newUser.username} created successfully`,
      error: '',
    });
  } catch (e) {
    const caughtError = e as Error;
    res
      .status(500)
      .json({ message: 'Something went wrong', error: caughtError.message });
  }
}
