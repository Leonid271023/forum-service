import {MODERATOR} from "../config/constants.js";
import Post from "../models/post.model.js";

const postOwnerOrModerator = async (req, res, next) => {
   try {
       if (!req.principal) {
           return res.status(401).json({message: 'Authorization required'});
       }
       if (req.principal.roles.includes(MODERATOR)) {
           return next();
       }
       const post = await Post.findById(req.params.id);
       if (!post){
           throw new Error(`Post with id ${req.params.id} not found`);
       }
       return next();

   }catch (e){
       next(e);
   }
}

export default postOwnerOrModerator;