import { NextApiRequest, NextApiResponse } from 'next';

type Course = {
  courseId: string;
  courseImageUrl: string;
  courseTitle: string;
  coursePrice: string;
};

var courses: Course[] = [
  {
    courseId: '1',
    courseImageUrl: '',
    courseTitle: 'React course',
    coursePrice: '123',
  },
  {
    courseId: '2',
    courseImageUrl: '',
    courseTitle: 'Math course',
    coursePrice: '123',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(courses);
    res.status(200).json({ courses: courses });
  } catch (e) {
    res.status(500).send('Something went wrong');
  }
}
