import { connect } from 'mongoose'

const connectDB = async () => {

    console.log()

    try {
        await connect(process.env.mongoURI ? process.env.mongoURI : "", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`[DATABASE CONNECTED]`);
    } catch (error) {
        console.log(error.message);
    }
};

export default connectDB