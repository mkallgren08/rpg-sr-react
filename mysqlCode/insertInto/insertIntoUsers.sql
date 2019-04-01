use crhdybcsctttyd85;
insert ignore into USERS 
  (user_id,user_email,user_role,user_firstname,user_lastname,user_nickname,user_about)
  values
  (UUID(),'mkallgren08@gmail.com','admin','Michael','Kallgren','Meneer Grizzly','');