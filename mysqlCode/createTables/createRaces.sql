use crhdybcsctttyd85;
create table if not exists Races(
  race_id varchar(36) not null primary key,
  min_bod int not null,
    max_bod int not null,
  min_agi int not null,
    max_agi int not null,
  min_rea int not null,
    max_rea int not null,
  min_str int not null,
    max_str int not null,
  min_wil int not null,
    max_wil int not null,
  min_log int not null,
    max_log int not null,
  min_int int not null,
    max_int int not null,
  min_cha int not null,
    max_cha int not null,
  min_edg int not null,
    max_edg int not null,
  essence int not null,
  initiative varchar(20) not null,
  traits json        
);

alter table Races
add column race_name varchar(36) after race_id;

alter table Races
add constraint unique_name unique key(race_name);



-- insert into Races (UUID(),min_bod,max_bod,min_agi,max_agi,min_rea,max_rea,
--   min_str,max_str,min_wil,max_wil,min_int,max_int,min_cha,max_cha,
--   min_edg,max_edg,essence,initiative)

select * from Races;