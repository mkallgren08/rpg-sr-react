

insert ignore into Credsticks (
  cred_id,cred_type,cred_maxval,cred_avail,cred_cost
) values 
  (UUID(), 'Standard', 5000, '-',5),
  (UUID(), 'Silver', 20000, '-',20),
  (UUID(), 'Gold', 100000, '5', 100),
  (UUID(), 'Platinum', 500000, '10', 500),
  (UUID(), 'Ebony', 1000000, '20', 1000);
  
  select * from Credsticks;