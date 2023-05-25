// utils/api.js
export async function startNewChat(apiToken, phoneNumber, message) {
    const response = await fetch('https://api.green-api.com/v1/messages', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "to": phoneNumber,
            "type":"text",
            "text": {
                "body": message
            }
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    // Assuming that the first message ID corresponds to the chat ID
    return jsonResponse.messages[0].id;
}
