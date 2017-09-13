DROP TABLE IF EXISTS athletes CASCADE;

CREATE TABLE athletes (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(255),
	dateOfBirth VARCHAR(255),
	location VARCHAR(255),
	nationality VARCHAR(255),
	gender VARCHAR(255),
	sport VARCHAR(255),
	team VARCHAR(255),
	association VARCHAR(255),
	interests VARCHAR(255),
	charities VARCHAR(255),
	facebook VARCHAR(255),
	twitter VARCHAR(255),
	instagram VARCHAR(255),
	youtube VARCHAR(255),
	snapchat VARCHAR(255)
)