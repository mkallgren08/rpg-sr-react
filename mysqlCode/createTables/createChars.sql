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
);

alter table CHARS
add column char_bod int after char_name,
add column char_agi int after char_bod,
add column char_rea int after char_agi,
add column char_str int after char_rea,
add column char_wil int after char_str,
add column char_log int after char_wil,
add column char_int int after char_log,
add column char_cha int after char_int,
add column char_edg int after char_cha,
add column char_essence float after char_edg,
add column char_init json after char_essence;
-- Note: remeber that there are three types of inits - basic, matrix, and astral. It will be easier to store these as a JSON object to pull values from