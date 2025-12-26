import Post from "../models/post.model.js";

const postOwnerOnly = async (req, res, next) => {
   try {


       if (!req.principal) {
           return res.status(401).json({message: 'Authorization required'});
       }
       const post = await Post.findById(req.params.id);
       if (!post) {
           throw new Error(`Post with id ${req.params.id} not found`);
       }
       if (post.author !== req.principal.username) {
           return res.status(403).json({message: 'Access denied: insufficient permissions'});
       }
       return next();
   }catch (e){
       next(e);
   }
}

export default postOwnerOnly;
