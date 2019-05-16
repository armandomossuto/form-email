export const sendMessage = (message, res) =>  {
    res.setHeader('Content-Type', 'application/json');
    res.send(message);
}