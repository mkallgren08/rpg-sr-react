insert into Armor (armor_id, armor_name, armor_rating,
	armor_avail, armor_cost, armor_notes)
values (UUID(),'Clothing', 0, '-', 20, 'Can cost from 20 to 100,000.'),
        (UUID(),'(Synth)Leather', 4, '-', 200, '-');

select * from Armor;

insert into ArmorMods (armormod_id, armormod_name, armormod_capacity,
    armormod_avail,armormod_basecost,armormod_ratingcost, armormod_notes)
values (UUID(),'Chemical Protection', 'Rating', '6', 0, 250, 
'Only available with full body armor that includes helmet. Provides an hour of clean air; complete protection from contact and inhalation vector chems. Complex Action to activate without wireless hookup, Free Action with wireless.');

select * from ArmorMods;

insert into ArmorAddOns (armoraddon_id, armoraddon_name, armoraddon_add_rating,
	armoraddon_add_avail, armoraddon_cost, armoraddon_notes)
values (UUID(),'Helmet - Full Body Armor', 3, '-', 500, 'Can cost from 20 to 100,000.'),
        (UUID(),'Helmet - Generic', 2, '2', 100, 'Anything from a ceremonial tribal helmet, motorcycle safety gear, or urban chic headware. Has a capacity of 6'),
        (UUID(),'Riot Shield', 2, '10R', 1500, '-1 to Physical Limit (due to shield unwieldlyness). Has a clear window and ladder frame. Can accept chemical, fire, and nonconductive mods.'),
        (UUID(),'Ballistic Shield', 6, '12R', 1200, '-1 to Physical Limit (due to shield unwieldlyness). Has a clear window, ladder frame, and contact Taser. The shield holds 10 charges. Regains 1 charge/10 seconds when plugged into power or 1 charge/hour via induction with a wireless hookup. Can accept chemical, fire, and nonconductive mods.');

select * from ArmorAddOns;