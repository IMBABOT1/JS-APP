create table users(
    email varchar(255) primary key,
    created_at timestamp  default now()
);

insert into users (email) values
('first@first.com'),
('second@second.com');