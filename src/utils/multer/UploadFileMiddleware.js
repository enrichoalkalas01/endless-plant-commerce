import multer from 'multer'

const memoryStorage = multer.memoryStorage()
export const uploadMemory = multer({ storage: memoryStorage })

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), 'public/uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})
  
export const uploadPublic = multer({ storage: diskStorage })