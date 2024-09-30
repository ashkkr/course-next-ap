import { Box, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { NEXT_URL } from "./config";

export default function Signup(){
    const [username,setUsername] = useState("");
    const [pswd,setPswd] = useState("");

    const submitform = async () => {
        const res = await fetch(`${NEXT_URL}/api/hello`,{
            method: 'GET'
        });
        const data = await res.json();

        if(res.ok) console.log(data);
        else console.log('Some error occurred');
    }

    return <Box>
        <Card sx={{ display: 'flex', flexDirection: 'column', gap: '10vh' ,width: '30vw',margin: 'auto',marginTop: '10vh', color: 'whitesmoke', border: 'solid',
            padding: '25px'
        }}>
            <TextField size="small" required label="username" variant="outlined" type="text" onChange={(e) => setUsername(e.target.value)}></TextField>
            <TextField size="small" required label="password" variant="outlined" type="password" onChange={(e) => setPswd(e.target.value)}></TextField>
            <Button sx={{ width: '40%', margin: 'auto'}} onClick={submitform} variant="contained">Sign up</Button>
        </Card>
    </Box>
}