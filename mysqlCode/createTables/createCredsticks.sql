use crhdybcsctttyd85;

create table if not exists Credsticks (
  cred_id varchar(36) primary key not null ,
  cred_type varchar(36) not null,
  cred_maxval integer not null,
  cred_avail varchar(10) not null,
  cred_cost integer not null
);


alter table Credsticks
add constraint unique key(cred_type);

select * from Credsticks;
