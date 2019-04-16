

insert ignore into Bioware(
  bioware_id,bioware_name,bioware_max_rating,bioware_rate_mult,
  bioware_ess,bioware_avail,bioware_cost,bioware_cultured,bioware_notes 
  ) values 
  (UUID(), 'Adrenaline Pump', 3, 1, 0.75, '6F', 55000, 0, ''),
  (UUID(), 'Cat Eye', 0, 0, 0.1, '4', 4000, 0, ''),
  (UUID(), 'Pain Editor', 0, 0, 0.3, '18F', 48000, 1, '');
  
select * from Races;
