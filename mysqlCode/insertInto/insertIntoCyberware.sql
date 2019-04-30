use crhdybcsctttyd85;

insert ignore into Cyberware(
  cyber_id,cyber_name,cyber_type,cyber_ess,cyber_capacity,
  cyber_avail,cyber_cost,cyber_cost_mult, cyber_notes
) values 
  (UUID(),'Cybereyes - Rating 1', 'Eyeware',0.2,4,'3',4000,'-','Basic cycbereyes system'),
  (UUID(), 'Flare Compesation','Eyeware',0.1,-1,'4',1000,'-','Reduces glare penalties to 0 and halves (rounding down) the penalty of flashing lights (like from flashpaks).'),
  (UUID(),'Cyberears - Rating 1', 'Earware', 0.2,4,'3',3000,'-','Basic cyberears system');