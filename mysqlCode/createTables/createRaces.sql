use crhdybcsctttyd85;
create table if not exists RACES(
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
  trait_ids json not null,
  trait_names json not null        
);

alter table RACES
add column race_name varchar(36) after race_id;

alter table RACES
add constraint unique_name unique key(race_name);