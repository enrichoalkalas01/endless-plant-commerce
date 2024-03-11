import formidable from 'formidable'
export const config = {
    api: {
        bodyParser: false,
    }
}

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
]

export const getHandler = (req, res) => {
    res.status(200).json(data)
}

export const postHandler = async (req, res) => {
    try {
        console.log('asd asd asd here')
        const form = new formidable.IncomingForm()
        console.log(form)
        // const form = new formidable.IncomingForm()
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error(err)
                throw { status: 400, statusText: 'Error parsing form data', message: 'Error parsing form data' }
            }

            console.log(fields)
        })

        return res.status(200).json({ statusCode: 200, statusText: 'Successfull to create data!', message: 'Successfull to create data!' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

export default (req, res) => {
    const { method } = req
    console.log(method)
    switch (method) {
        case 'GET':
            return getHandler(req, res)
        case 'POST':
            return postHandler(req, res)
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}