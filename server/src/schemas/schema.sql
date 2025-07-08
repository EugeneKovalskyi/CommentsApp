CREATE TABLE IF NOT EXISTS `users` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(64) NOT NULL UNIQUE,
	`email` varchar(255) NOT NULL UNIQUE,
	`home_page` varchar(255),
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `comments` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`text` text NOT NULL,
	`date` datetime NOT NULL,
	`user_id` int NOT NULL,
	`parent_id` int,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `imgs` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`url` text NOT NULL,
	`comment_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `txts` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`url` text NOT NULL,
	`comment_id` int NOT NULL,
	PRIMARY KEY (`id`)
);


ALTER TABLE `comments` ADD CONSTRAINT `comments_fk3` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `comments` ADD CONSTRAINT `comments_fk4` FOREIGN KEY (`parent_id`) REFERENCES `comments`(`id`);
ALTER TABLE `imgs` ADD CONSTRAINT `imgs_fk2` FOREIGN KEY (`comment_id`) REFERENCES `comments`(`id`);
ALTER TABLE `txts` ADD CONSTRAINT `txts_fk2` FOREIGN KEY (`comment_id`) REFERENCES `comments`(`id`);