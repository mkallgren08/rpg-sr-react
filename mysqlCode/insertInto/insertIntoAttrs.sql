use crhdybcsctttyd85;

insert ignore into Attrs (attr_id,attr_name,attr_abbrev) 
values 
  (UUID(),'Body', 'Bod'),
  (UUID(),'Agility', 'Agi'),
  (UUID(),'Reaction', 'Rea'),
  (UUID(),'Strength', 'Str'),
  (UUID(),'Will', 'Wil'),
  (UUID(),'Logic', 'Log'),
  (UUID(),'Intuition', 'Int'),
  (UUID(),'Charisma', 'Cha'),
  (UUID(),'Edge', 'Edg'),
  (UUID(),'Resonance', 'Res'),
  (UUID(),'Magic','Mag');

select * from Attrs;