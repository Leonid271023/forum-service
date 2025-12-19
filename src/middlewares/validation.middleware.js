import Joi from 'joi';

const schema ={
    createPost: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().items(Joi.string())
    })
}

const validate = schemaName => (req, res, next) => {
    const schema = schemas[schemaName];
    if(!schema){
        return next(new Error(`No schema found for ${schemaName}`));
    }

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).send({
            message: error.details[0].message
            ,code: 400,
            status: 'Bad Request',
            path: req.path
        });
    }
    return next();
}

export default validate;