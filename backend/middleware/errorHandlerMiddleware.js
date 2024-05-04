const errorHandlerMiddleware = async (err, req, res, next) => {
  try {
    if (err) {
      console.log({ err });
      return res.status(500).json({success:false, message:err.message})
    }
  } catch (error) {
    console.log("failed to catch error by middleware");
  }
};


export {errorHandlerMiddleware}