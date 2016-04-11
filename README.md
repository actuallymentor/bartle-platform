# A Bartle test system

Using this for a research project

# Database setup sql

`
CREATE TABLE Results
(
ID int NOT NULL AUTO_INCREMENT,
bartle_type varchar(255),
gamified int(1),
interactions varchar(255),
interactions_correct varchar(255),
killer_quotient varchar(255),
achiever_quotient varchar(255),
explorer_quotient varchar(255),
socializer_quotient varchar(255),
timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (ID)
)
`