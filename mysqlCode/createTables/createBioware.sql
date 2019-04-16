use crhdybcsctttyd85;

create table if not exists Bioware (
  bioware_id varchar(36) not null primary key,
  bioware_name varchar(36) not null,
  bioware_max_rating int not null,
  bioware_rate_mult tinyint(1) not null,
  bioware_ess float not null,
  bioware_avail varchar(5) not null,
  bioware_cost int not null,
  bioware_cultured tinyint(1) not null,
  bioware_notes varchar(400)
  
);

alter table Bioware 
add constraint unique key(bioware_name);

select * from Bioware