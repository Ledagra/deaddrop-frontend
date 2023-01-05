import * as React from 'react';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import MessageLink from './MessageLink';

export async function fetchText() {
    let message = document.getElementById("CreateMessageTextField").value;
    let sender = "";
    let recipient = "";
    let country = "";

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:5001');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    
    const response = await fetch(`https://dead-drop-app-web-service.herokuapp.com/storeMessage`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(
            { 
                "text" : message,
                "sender" : sender,
                "recipient" : recipient,
                "country" : country
            }
        )
    });
    
    if (message == "") {
        alert("Please enter a message");
        return null;
    } else {
        return await response.json().then((data) => {
            console.log("response: " + response);
            console.log("response.json: " + response.json());
            console.log("data: " + data.url);
            return JSON.stringify(data.url);
            
        });
    }
}

export default function MessageBox() {
    const [url, isMessageCreated] = useState("");

    if (url == "") {
        return (
                <div>
                    <TextField  id="CreateMessageTextField" 
                                label="Type secret message" 
                                aria-label='empty textarea'
                                variant="outlined" 
                                style={{ backgroundColor: 'white' }}
                                fullWidth={true}
                                multiline={true}
                                rows={3}
                                rowsMax={3}
                                size="large"
                                />
                    <IconButton
                        aria-label="send"
                        onClick={() => {
                            fetchText().then((url) => {
                                isMessageCreated(url);
                            });
                        }}
                    >
                        <SendIcon fontSize="large" />
                    </IconButton>
                </div>
        )
    } else {
        return (
            <div>
                <MessageLink url={url}/>
            </div>
        )
    }
}