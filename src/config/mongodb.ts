import { connect } from "mongoose";

const dbConnect = async () => {
    const DB_URI = <string> process.env.DB_URI ?? 'mongodb://localhost:27017/flexible';
    await connect(DB_URI);
}
export default dbConnect;
