import express from 'express';

const PORT = 3333;

const app = express();

app.use(express.json());

// Routes

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello World !!!'
    });
});

app.listen(PORT);