export const sendMessage = (res, message) =>  {
    res.setHeader('Content-Type', 'application/json');
    res.send(message);
}