import { Box, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { NEXT_URL } from "./config";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Inputs = {
    username: string;
    password: string;
}

export default function Signup(){
    const {register,handleSubmit,formState: {errors},watch} = useForm<Inputs>();
    const router = useRouter();

    const signIn : SubmitHandler<Inputs> = async (data) => {
        const res = await fetch(`${NEXT_URL}/api/hello`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resBody = await res.json();
        if(!res.ok){
            console.log('Some error occurred');
            return;
        }

        console.log(resBody.message);
        router.push('/courses');
    }

    return <Box>
        <Card sx={{ display: 'flex', flexDirection: 'column', gap: '10vh' ,width: '30vw',margin: 'auto',marginTop: '10vh', color: 'whitesmoke', border: 'solid',
            padding: '25px'
        }}>
            <form onSubmit={handleSubmit(signIn)}>
            <TextField size="small" label="username" variant="outlined" type="text" {...register("username",{required: true})}></TextField>
            <TextField size="small" label="password" variant="outlined" {...register("password",{required: true})}></TextField>
            <Button sx={{ width: '40%', margin: 'auto'}} type="submit" variant="contained">Sign up</Button>
            </form>
        </Card>
    </Box>
}