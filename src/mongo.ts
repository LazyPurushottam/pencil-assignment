import mongoose, { mongo } from 'mongoose';

const mongoPath = 'mongodb+srv://pencil:wpFftrbgiHlY4syw@pencil.epafz.mongodb.net/assignment?retryWrites=true&w=majority'

module.exports = async () =>{
    await mongoose.connect(mongoPath)
    return mongoose
}

export default mongo;
