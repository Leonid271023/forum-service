import express, from 'express'
import {Router} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import config from './config/config.js';
import postRoutes from "./routes/post.routes.js";
import userAccountRoutes from "./routes/userAccount.router.js";
import errorHandler from "./middlewares/error.midleware.js";
import authentication from "./middlewares/authentication.middleware.js";
import {createAdmin} from "./config/initAdmin.js";
import authorization from "./middlewares/authorization.middleware.js";
import {ADMIN, MODERATOR} from "./config/constants.js";

const app = express();
app.use(cors());
app.use(express.json());
const authorizationRouter = Router();

app.use(express.json());
app.use(authentication);
//app.use(/^\/account\/user\/\w+\/role\/\w+$/, authorization.hasRole(ADMIN))
authorizationRouter.all('/account/user/:user/role/:role',authorization.hasRole(ADMIN));
authorizationRouter.patch(['/account/user/:user', '/forum/post/:id/comment/:user'], authorization.isOwner('user'));
authorizationRouter.delete('/account/user/:user', authorization.isOwnerOrHasRole('user', ADMIN));
authorizationRouter.post('/forum/post/:author', authorization.isOwner('author'));
//authorizationRouter.patch('/forum/post/:id/comment/:author', authorization.isOwner('author'));
authorizationRouter.patch('/forum/post/:id', authorization.isPostAuthor("id"));
authorizationRouter.delete('/forum/post/:id', authorization.isPostAuthorOrHasRole("id", MODERATOR));




app.use(authorizationRouter);
app.use('/forum', postRoutes);
app.use('/account', userAccountRoutes);


app.use(errorHandler)


const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri, config.mongodb.db)
        await createAdmin();
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.log('MongoDB connection error', error)
    }
}


const startServer = async () => {
    await connectDB()
    app.listen(config.port, () => console.log(`Server started on port ${config.port}. Press Ctrl-C to finish`));
}


startServer()
