use crhdybcsctttyd85;
create table if not exists CHARS (
  char_id varchar(36) not null primary key,
  char_name varchar(36) not null,
  char_height varchar(10),
  char_race varchar(30) not null,
  char_age int,
  char_ethnicity varchar(30),
  char_streetcred int,
  char_notoriety int,
  char_publicity int,
  char_karma int not null,
  char_totkarma int not null,
  char_misc JSON,
  char_userid varchar(36) not null,
  foreign key(char_userid)
    references USERS (user_id)
)