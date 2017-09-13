db = require('../db/config')

function getAthlete(id) {
	return db.one(`SELECT * FROM athletes WHERE id=$1`,
		[id]);
}

function getAllAthletes() {
	return db.manyOrNone(`SELECT name FROM athletes`)
}

function create(name, dateOfBirth, location, nationality, gender) {
	return db.one(`INSERT INTO athletes (name, dateOfBirth, location, nationality, gender) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
		[name, dateOfBirth, location, nationality, gender]);
};

function updateBasic(name, dateOfBirth, location, nationality, gender, id) {
	return db.one(`UPDATE athletes SET name=$1, dateOfBirth=$2, location=$3, nationality=$4, gender=$5 WHERE id=$6 RETURNING *`,
		[name, dateOfBirth, location, nationality, gender, id]);
};

function updateAbout(sport, team, association, interests, charities, id) {
	return db.one(`UPDATE athletes SET sport=$1, team=$2, association=$3, interests=$4, charities=$5 WHERE id= $6 RETURNING *`,
		[sport, team, association, interests, charities, id]);
}

function updateSocial(facebook, twitter, instagram, youtube, snapchat, id) {
	return db.one(`UPDATE athletes SET facebook=$1, twitter=$2, instagram=$3, youtube=$4, snapchat=$5 WHERE id= $6 RETURNING *`,
		[facebook, twitter, instagram, youtube, snapchat, id]);
}

module.exports = { getAthlete, getAllAthletes, create, updateSocial, updateAbout, updateBasic };
