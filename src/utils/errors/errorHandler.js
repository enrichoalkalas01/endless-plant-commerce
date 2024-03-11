const errorHandler = (res, status, message) => {
    return res.status(status).json({ error: message })
}
  
export default errorHandler