import { Box, Card, Typography } from "@mui/material";
import { NEXT_URL } from "./config";

type Course = {
    courseId: string;
    courseImageUrl: string;
    courseTitle: string;
    coursePrice: string;
}

export default function Courses({courses} : {
    courses: Course[]
}){
    return <Box>
        {courses.map((c) => {
            return <Card>
                <Typography>{c.courseTitle}</Typography>
            </Card>
        })}
    </Box>
}

export async function getServerSideProps(){
    const res = await fetch(`${NEXT_URL}/api/courses`,{
        method: 'GET'
    });
    const data = await res.json();

    if(!res.ok){
        return {props: {
            courses: []
        }}
    }

    return {props: {
        courses: data.courses
    }}
}