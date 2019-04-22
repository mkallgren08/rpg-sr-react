use crhdybcsctttyd85;
insert into Chars (char_id, char_name,char_bod, char_agi,char_rea,char_str,
char_wil,char_log,char_int,char_cha,char_edg,char_essence,char_mag,char_res,char_init,
char_height,char_race_id, char_age,char_ethnicity,char_streetcred, char_notoriety,
char_publicity, char_karma, char_totkarma, char_misc, char_userid)
values (
  UUID(), 'Blondie', 6,5,7,8,3,3,3,2,2,6,6,0,'{"inits":{"init":"rea+int+4d6","astinit":"int*2+5d6","matinit_cold":"null","matinit_hot":"null"}}',
  '2m','03d2ef8b-5ff6-11e9-9efc-0e3bd9a570ee',32,'Caucasian',0,0,0,12,26,'{"notes":[]}', '788f7f30-55c1-11e9-aa1a-0385967687d1'
);

select * from Chars;

update Chars set char_race_id = '03d2ef8b-5ff6-11e9-9efc-0e3bd9a570ee' where char_name='Blondie';

select * from Chars;