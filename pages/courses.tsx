import { Box, Button, Card, CardContent, CardMedia, Grid2, styled, Typography } from "@mui/material";
import { NEXT_URL } from "./config";
import { pink } from "@mui/material/colors";
import Link from "next/link";

export type Course = {
    courseId: string;
    courseImageUrl: string;
    courseTitle: string;
    coursePrice: string;
}

const TitleText = styled(Typography)({
    color: pink[900]
})

export default function Courses({courses} : {
    courses: Course[]
}){
    return <Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Link href="/createcourse"><Button sx={{color: pink[400], backgroundColor: pink[100]}}>Create new course</Button></Link>
        </Box>
        <Grid2 container spacing={4} sx={{ padding: '20px'}}>
        {courses.map((c) => {
            return <Grid2 key={c.courseId} size={3}>
            <Card variant="outlined" sx={{backgroundColor: pink[50], padding: '10px'}}>
                <CardMedia title={"Course Image"} image="/course-pic.jpg" sx={{ height: 140}}/>
                <CardContent><TitleText>{c.courseTitle}</TitleText>
                <TitleText>{c.coursePrice}</TitleText></CardContent>
            </Card>
            </Grid2>
        })}
        </Grid2>
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