import headers from "./headers";

export async function fetchFriendRequestList(username) {
  
    let response = await fetch(`https://dead-drop-app-web-service.herokuapp.com/getFriendRequests`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        currUser: username,
      })
    });
  
    return await response.json().then((data) => {  
        return data.friendRequestsList;
    });
  } 