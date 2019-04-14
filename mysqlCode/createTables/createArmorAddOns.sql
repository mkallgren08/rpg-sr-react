-- This is the Helmet and Shield Table - named it Armor Add Ons to keep it with the other armor pieces

use crhdybcsctttyd85;

create table if not exists ArmorAddOn (
  armoraddon_id varchar(36) not null primary key,
  armoraddon_name varchar(36) not null,
  armoraddon_add_rating int not null,
  armoraddon_add_avail varchar(4) not null,
  armoraddon_cost int not null,
  armoraddon_notes varchar(400)
);

alter table ArmorAddOn 
add constraint unique key(armoraddon_name);

insert into ArmorAddOn (armoraddon_id, armoraddon_name, armoraddon_add_rating,
	armoraddon_add_avail, armoraddon_cost, armoraddon_notes)
values (UUID(),'Helmet - Full Body Armor', 3, '-', 500, 'Can cost from 20 to 100,000.'),
        (UUID(),'Helmet - Generic', 2, '2', 100, 'Anything from a ceremonial tribal helmet, motorcycle safety gear, or urban chic headware. Has a capacity of 6'),
        (UUID(),'Riot Shield', 2, '10R', 1500, '-1 to Physical Limit (due to shield unwieldlyness). Has a clear window and ladder frame. Can accept chemical, fire, and nonconductive mods.'),
        (UUID(),'Ballistic Shield', 6, '12R', 1200, '-1 to Physical Limit (due to shield unwieldlyness). Has a clear window, ladder frame, and contact Taser. The shield holds 10 charges. Regains 1 charge/10 seconds when plugged into power or 1 charge/hour via induction with a wireless hookup. Can accept chemical, fire, and nonconductive mods.');

select * from ArmorAddOn;