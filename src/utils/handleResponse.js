const handleResponse = (res, promise, action, status) => {
  promise
    .then(
      (data) =>
        res.status(status || 200).json({
          message: `${action} successfully!`,
          data,
        }),
    )
    .catch((error) =>
      res.status(error.status || 500).json({ message: error.message })
    );
};

module.exports = handleResponse;
