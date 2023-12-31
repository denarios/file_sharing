export const uploadImage=async(req,res)=>{
    const fileObj={
        path:req.file.path,
        name:req.file.originalname,
    }
    try {
        const file=await File.create(fileObj);
        res.status(200).json({path :`http://localhost:8000/file/${file._id}`});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}