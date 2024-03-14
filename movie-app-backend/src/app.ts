import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes';
import reviewRoutes from './routes/reviewRoutes';

const app = express();
const MONGO_URL='mongodb+srv://tusharchahar:X4LE73swa5yF*Aq@cluster.aab0tfl.mongodb.net/tara?retryWrites=true&w=majority';

app.use(express.json());

app.use(cors());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', "GET, PUT, POST, PATCH");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
 });


app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

mongoose.connection.on('open',()=>{
	console.log('connected to database');
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 5500;
(async()=>{
	await mongoose.connect(MONGO_URL);
	 app.listen(PORT, () =>
	console.log(`application is running on :${PORT}`)
);
})();
