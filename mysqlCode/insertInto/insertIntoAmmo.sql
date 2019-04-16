insert into Ammo (ammo_id, ammo_name, ammo_dmg_mod,
    ammo_ap_mod,ammo_dmg_type1,ammo_dmg_type2, ammo_avail,
    ammo_cost, ammo_notes)
values (UUID(),'Standard', 0, 0, 'P', '-', '2R', 20, 'Standard ammo');

select * from Ammo;