use crhdybcsctttyd85;

create table if not exists Attrs (
  attr_id varchar(36) not null primary key,
  attr_name varchar(36) not null,
  attr_abbrev varchar(5) not null
);

alter table Attrs 
add constraint unique key(attr_name)