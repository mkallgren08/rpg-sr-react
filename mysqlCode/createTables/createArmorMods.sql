use crhdybcsctttyd85;

create table if not exists ArmorMods (
  armormod_id varchar(36) not null primary key,
  armormod_name varchar(36) not null,
  armormod_capacity varchar(36) not null,
  armormod_avail varchar(4) not null,
  armormod_basecost int,
  armormod_ratingcost int,
  armormod_notes varchar(250)
);

alter table ArmorMods 
add constraint unique key(armormod_name);

insert into ArmorMods (armormod_id, armormod_name, armormod_capacity,
    armormod_avail,armormod_basecost,armormod_ratingcost, armormod_notes)
values (UUID(),'Chemical Protection', 'Rating', '6', 0, 250, 
'Only available with full body armor that includes helmet. Provides an hour of clean air; complete protection from contact and inhalation vector chems. Complex Action to activate without wireless hookup, Free Action with wireless.');

select * from ArmorMods;