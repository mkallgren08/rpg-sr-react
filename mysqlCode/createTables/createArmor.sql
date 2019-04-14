use crhdybcsctttyd85;

create table if not exists Armor (
  armor_id varchar(36) not null primary key,
  armor_name varchar(36) not null,
  armor_rating int not null,
  armor_avail varchar(4) not null,
  armor_cost int not null,
  armor_notes varchar(250)
);

alter table Armor 
add constraint unique key(armor_name);

insert into Armor (armor_id, armor_name, armor_rating,
	armor_avail, armor_cost, armor_notes)
values (UUID(),'Clothing', 0, '-', 20, 'Can cost from 20 to 100,000.'),
        (UUID(),'(Synth)Leather', 4, '-', 200, '-');

select * from Armor;