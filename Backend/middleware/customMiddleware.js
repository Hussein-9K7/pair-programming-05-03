const unknownEndpoint = (req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
  };
  

  const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    next(err);
  };
  
  module.exports = { unknownEndpoint, errorHandler };
  