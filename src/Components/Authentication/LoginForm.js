import * as React from 'react';
import Box from '@mui/material/Box';
import headers from '../../Fetch/headers';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {CreateFriendRequestList} from '../Friends Functionality/FriendRequestList';
import FriendList from '../Friends Functionality/FriendList';


//Call to web service to create account
export async function createAccount(register) {
    let username = document.getElementById("usernameTextField").value;
    let password = document.getElementById("passwordTextField").value;
    let nickname = document.getElementById("nicknameTextField").value;

    let response = "" 
    if (register){
        response = await fetch(`https://dead-drop-app-web-service.herokuapp.com/storeUser`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(
                { 
                    "username" : username,
                    "password" : password,
                    "nickname" : nickname
                }
            )
        });
    } else {
        response = await fetch(`https://dead-drop-app-web-service.herokuapp.com/verifyUser`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(
                { 
                    "username" : username,
                    "password" : password
                }
            )
        });
    }
    
    return await response.json().then((data) => {
        //send back username and nickname
        let returnUsername = data.username;
        // returnUsername = returnUsername.substring(1, returnUsername.length - 1);
        let returnNickname = data.nickname;
        //returnNickname = returnNickname.substring(1, returnNickname.length - 1);

        return [returnUsername, returnNickname];
    });
}

export default function CreateLoginForm() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [nickname, setNickname] = React.useState("");
    if (!loggedIn){

        return (
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="usernameTextField" label="Username" variant="outlined" />
                <TextField id="passwordTextField" label="Password" variant="outlined" />
                <TextField id="nicknameTextField" label="Nickname" variant="outlined" />
                <Button variant="contained"
                        onClick={async () => {
                            let success = await createAccount(false);
                            if (success != null) setLoggedIn(true);
                            //console.log("login status: " + loggedIn);
                            setUsername(success[0]);
                            setNickname(success[1]);
                        }}>Login</Button>

                <Button 
                    variant="contained"
                    onClick={async () => {
                        let success = await createAccount(true);
                        if (success != null) setLoggedIn(true);
                        //console.log("login status: " + loggedIn);
                        setUsername(success[0]);
                        setNickname(success[1]);
                    }}>

                Create Account
                 </Button>
            </Box>
        );
    } else {
        return (
            <div>
                <h1>Welcome {nickname} </h1>
                <h4>Username: {username}</h4>
                <FriendList user={username} />
                <CreateFriendRequestList user={username} />
            </div>
        )
    }

}