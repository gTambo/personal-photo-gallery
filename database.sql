-- CREATE DATABASE "react_gallery"

CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (256) NOT NULL,
	"description" VARCHAR (512) NOT NULL,
	"likes" INT
);

INSERT INTO gallery ("path", "description", "likes")
VALUES 
	('images/AK_boulder.png', 'Me on a boulder in AK', 0 ),
    ('images/bass.png', 'Some basses on a wall', 0 ),
    ('images/chill_with_heather.png', 'At home with Heather', 0),
    ('images/heather_flowers.png', 'Heather making bouquets', 0),
    ('images/north_shore.png', 'Exploring on the Superior North Shore', 0),
    ('images/sailing.png', 'Sailing in the Apostle Islands with friends', 0),
    ('images/salsa_vaya.png', 'Bike rides around MSP', 0),
    ('images/SD_boulder.png', 'Me bouldering in SD', 0),
    ('images/Spearfish.png', 'Sport climbing in Spearfish, SD', 0),
    ('images/Summersville.png', 'My brother sport climbing at Summersville Lake', 0);


-- DROP TABLE gallery; -- just in case you need it.