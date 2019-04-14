use crhdybcsctttyd85;
create table if not exists Users (
  user_id varchar(36) not null primary key,
  user_email varchar(60) not null,
  user_role varchar(20) not null,
  user_firstname varchar(40),
  user_lastname varchar(40),
  user_nickname varchar(20), 
  user_about varchar(200)
);

alter table Users
add constraint unique_email unique key(user_email);

alter table Users
add column newuser int after user_about;

-- use crhdybcsctttyd85;
-- rename table Users to Users;