import { NextApiRequest, NextApiResponse } from 'next';

type Course = {
  courseId: string;
  courseImageUrl: string;
  courseTitle: string;
  coursePrice: string;
};

export var courses: Course[] = [
  {
    courseId: '1',
    courseImageUrl: '',
    courseTitle: 'React course',
    coursePrice: '199',
  },
  {
    courseId: '2',
    courseImageUrl: '',
    courseTitle: 'Math course',
    coursePrice: '129',
  },
  {
    courseId: '3',
    courseImageUrl: '',
    courseTitle: 'Learn HTML',
    coursePrice: '99',
  },
  {
    courseId: '4',
    courseImageUrl: '',
    courseTitle: 'Foundational physics',
    coursePrice: '149',
  },
  {
    courseId: '5',
    courseImageUrl: '',
    courseTitle: 'Math for 5 year olds',
    coursePrice: '229',
  },
  {
    courseId: '6',
    courseImageUrl: '',
    courseTitle: 'Earth Sciences',
    coursePrice: '299',
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
