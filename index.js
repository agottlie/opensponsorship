const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Profile = require('./models/profile');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/:id', (req,res) => {
	const id = req.params.id;

	Profile
		.getAthlete(id)
		.then((data) => {
			res.json(data);
		})
		.catch(err => console.log('ERROR: ', err));
})

app.get('/', (req,res) => {
	Profile
		.getAllAthletes()
		.then((data) => {
			res.json(data);
		})
		.catch(err => console.log("ERROR:", err));
})

app.post('/basic', (req,res) => {
	const {name, dateOfBirth, location, nationality, gender} = req.body;

	Profile
		.create(name, dateOfBirth, location, nationality, gender)
		.then((data) => {
			res.json(data);
		})
		.catch(err => console.log('ERROR: ', err));

})

app.put('/basic', (req,res) => {
	const {name, dateOfBirth, location, nationality, gender, id} = req.body;

	Profile
		.updateBasic(name, dateOfBirth, location, nationality, gender, id)
		.then((data) => {
			res.json(data);
		})
		.catch(err => console.log('ERROR: ', err));

})

app.put('/about', (req,res) => {
	const {sport, team, association, interests, charities, id} = req.body;

	Profile
		.updateAbout(sport, team, association, interests, charities, id)
		.then((data) => {
			res.json(data);
		})
		.catch(err => console.log('ERROR:', err));
})

app.put('/social', (req,res) => {
	const {facebook, twitter, instagram, youtube, snapchat, id} = req.body;

	Profile
		.updateSocial(facebook, twitter, instagram, youtube, snapchat, id)
		.then((data) => {
			res.json(data);
		})
		.catch(err => console.log('ERROR:', err));
})


app.listen(PORT, () => console.log('Server listening on port', PORT));