use crhdybcsctttyd85;
create table if not exists UserChars(
  entry_id varchar(36) not null primary key,
  user_id varchar(36) not null,
  char_id varchar(36) not null,
  char_name varchar(36) not null,
  char_image varchar(36),
  foreign key (user_id)
    references Users (user_id)
      on update cascade
      on delete cascade,
  foreign key (char_id)
    references Chars (char_id)
      on update cascade
      on delete cascade 
) 