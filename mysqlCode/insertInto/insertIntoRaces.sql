use crhdybcsctttyd85;
insert ignore into RACES 
  (race_id,race_name,min_bod,max_bod,min_agi,max_agi,min_rea,max_rea,min_str,max_str,min_wil,max_wil,min_log,max_log,min_int,max_int,min_cha,
  max_cha,min_edg,max_edg,essence,initiative,trait_ids,trait_names )
  values
  (UUID(),'Human',1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,2,7,6,'Rea+Int','{"trait_ids":[]}','{"trait_names":[]}'),
  (UUID(),'Elf',1,6,2,7,1,6,1,6,1,6,1,6,1,6,3,8,1,6,6,'Rea+Int','{"trait_ids":[]}','{"trait_names":["Low-Light Vision"]}'),
  (UUID(),'Dwarf',3,8,1,6,1,5,3,8,2,7,1,6,1,6,1,6,1,6,6,'Rea+Int','{"trait_ids":[]}','{"trait_names":["Increased Lifestyle Cost", "+2 dice to pathogen and toxin resistance"]}'),
  (UUID(),'Orc',4,9,1,6,1,6,3,8,1,6,1,5,1,6,1,5,1,6,6,'Rea+Int','{"trait_ids":[]}','{"trait_names":["Low-Light Vision"]}'),
  (UUID(),'Troll',5,10,1,5,1,6,5,10,1,6,1,5,1,5,1,4,1,6,6,'Rea+Int','{"trait_ids":[]}','{"trait_names":["Thermographic Vision","+1 Reach","+1 Dermal Armor","Increased Lifestyle Cost"]}');