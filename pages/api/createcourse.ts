import { NextApiRequest, NextApiResponse } from 'next';
import { Course } from '../courses';
import { courses } from './courses';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('hree');
    const reqbody = req.body;
    const course: Course = {
      courseId: Number(courses.length + 1).toString(),
      courseImageUrl: reqbody.courseImageUrl,
      courseTitle: reqbody.courseTitle,
      coursePrice: reqbody.coursePrice,
    };

    courses.push(course);
    console.log(course);
    res.status(201).json({
      course: course,
      message: 'Course has been registered successfully.',
    });
  } catch (e) {
    console.log(e);
    res.status(500).send('Some server side error occurred.');
  }
}
