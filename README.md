# A Bartle test system

Using this for a research project.

# Installation instructions

The system is easily implemented:

- Upload the files to a LAMP/LEMP server
- Create a database with the below SQL code
- Set your database settings in database/import-config.php
- You're up

Optionall use the deploy.ssh script

# Database setup sql

```SQL
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
age varchar(255),
gender varchar(255),
email varchar(255),
timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (ID)
)
```
