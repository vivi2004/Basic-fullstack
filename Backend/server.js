import  express from 'express'; 
const app = express();

app.get('/', (req, res) => {
    res.send('Server is  listening !!');
});


//  get a list of 5 jokes
app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id: 1,
            title: ' A one joke',
            content: 'This is a  first  joke'
        },
        {
            id: 2,
            title: ' A second joke',
            content: 'This is a second joke'
        },
        {
            id: 3,
            title: ' A  three joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: ' A fourth  joke',
            content: 'This is a fourth joke'
        },
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log( ` server at  http://localhost:${port}`);
    
});



