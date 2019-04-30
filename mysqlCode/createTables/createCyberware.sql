use crhdybcsctttyd85;

create table if not exists Cyberware (
  cyber_id varchar(36) primary key not null,
  cyber_name varchar(36) not null,
  cyber_type varchar(36) not null,
  cyber_ess float not null,
  cyber_capacity integer not null,
  cyber_avail varchar(10) not null,
  cyber_cost integer not null,
  cyber_cost_mult varchar(15),
  cyber_notes text
);

alter table Cyberware 
add constraint unique key(cyber_name);

select * from Cyberware;