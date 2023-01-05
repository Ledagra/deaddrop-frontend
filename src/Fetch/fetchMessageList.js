import headers from "./headers";

export async function fetchMessageList(username, sender) {
  
    let response = await fetch(`https://dead-drop-app-web-service.herokuapp.com/getFriendMessages`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        currUser: username,
        sender: sender
      })
    });
  
    return await response.json().then((data) => {
        console.log("Response from MessageListFetch:" + data.friendsList);
        return data.friendsList;
    });
  } 