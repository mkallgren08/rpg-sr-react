use crhdybcsctttyd85;

insert ignore into Attrs (attr_id,attr_name,attr_abbrev) 
values 
  (UUID(),'Body', 'bod'),
  (UUID(),'Agility', 'agi'),
  (UUID(),'Reaction', 'rea'),
  (UUID(),'Strength', 'str'),
  (UUID(),'Will', 'wil'),
  (UUID(),'Logic', 'log'),
  (UUID(),'Intuition', 'int'),
  (UUID(),'Charisma', 'cha'),
  (UUID(),'Edge', 'edg'),
  (UUID(),'Resonance', 'res'),
  (UUID(),'Magic','mag'),
  (UUID(),'Essence','ess');


select * from Attrs;

-- update Attrs
-- set `attr_abbrev` = LOWER(`attr_abbrev`);