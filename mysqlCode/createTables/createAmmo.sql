use crhdybcsctttyd85;

create table if not exists Ammo (
  ammo_id varchar(36) not null primary key,
  ammo_name varchar(36) not null,
  ammo_dmg_mod int not null,
  ammo_ap_mod int not null,
  ammo_dmg_type1 varchar(10) not null,
  ammo_dmg_type2 varchar(15) not null,
  ammo_avail varchar(4) not null,
  ammo_cost int not null,
  ammo_notes varchar(150)
);

alter table Ammo 
add constraint unique key(ammo_name);

insert into Ammo (ammo_id, ammo_name, ammo_dmg_mod,
    ammo_ap_mod,ammo_dmg_type1,ammo_dmg_type2, ammo_avail,
    ammo_cost, ammo_notes)
values (UUID(),'Standard', 0, 0, 'P', '-', '2R', 20, 'Standard ammo');

select * from Ammo;