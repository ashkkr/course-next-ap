import { Box, Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Course } from "./courses";
import { pink } from "@mui/material/colors";
import { NEXT_URL } from "./config";
import { useRouter } from "next/router";

export default function createcourse(){
    const {watch,formState: {errors}, register, handleSubmit} = useForm<Course>();
    const router = useRouter();
    
    const createCourse: SubmitHandler<Course> = async (data) => {
        const res = await fetch(`${NEXT_URL}/api/createcourse`,{
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const resbody = await res.json();
        console.log(resbody);
        if(res.ok){
            router.push('/courses');
        }
    }

    return <Box>
        <Card sx={{ width: '30vw',margin: 'auto',marginTop: '10vh', backgroundColor: pink[50], border: 'none',
            padding: '25px'
        }}>
        <form onSubmit={handleSubmit(createCourse)}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <TextField size="small" label="Course Title" {...register("courseTitle",{ required: true, maxLength: 20})}/>
        <TextField size="small" label="Course Price" {...register("coursePrice",{ required: true,valueAsNumber: true})}/>
        <TextField size="small" label="Course Image URL" {...register("courseImageUrl")}/>
        </CardContent>
        <CardActions>
        <Button sx={{ width: '100%', backgroundColor: pink[200], color: "white", fontWeight: 500}} type="submit">Create Course</Button>
        </CardActions>
    </form>
    </Card>
    </Box>
}