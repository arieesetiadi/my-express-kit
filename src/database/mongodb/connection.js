import mongoose from "mongoose";
import config from './config.js';

// Config mongoose
mongoose.set("strictQuery", true);

// Generate MongoDB URI
const { username, password, name } = config;
const mongoURI = `mongodb+srv://${username}:${password}@samplecluster.djadqmp.mongodb.net/${name}?retryWrites=true&w=majority`;
await mongoose.connect(mongoURI);

export default mongoose;
