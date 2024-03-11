import express from 'express';

const App = express();
const router = express.Router();

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

router.get('/', (req, res) => {
    try {
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ data: data });
    }
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return postHandler(req, res);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export const postHandler = async (req, res) => {
    try {
        console.log('asd asd asd here');
        // return res.status(200).json({ statusCode: 200, statusText: 'Successfully created data!', message: 'Successfully created data!' });
        return router
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};