function logError(error,req,res,next){
    console.error(error);
    next(error);
}

function errorHandler(err,req,res,next){
    res.status(500).json({
        message:err.message,
        stack:err.stack
    });
}