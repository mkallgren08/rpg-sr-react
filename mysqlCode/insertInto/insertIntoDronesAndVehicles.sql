use crhdybcsctttyd85;

insert ignore into DronesAndVehicles(
  droveh_id, droveh_name, droveh_skill, droveh_type, droveh_handl,
  droveh_speed, droveh_accel, droveh_bod, droveh_armor,
  droveh_pilot, droveh_sensor, droveh_seats, droveh_avail,
  droveh_cost,droveh_notes
) values 
(UUID(), 'Dodge Scoot', 'Pilot Groundcraft','Bike', '4/3', '3', 1, 4, 4,1,1,'1','-',3000,'Electric powered scooter that no self-respecting runner would be caught dead on'),
(UUID(), 'Toyota Gopher','Pilot Groundcraft','Truck','5/5','4',2,14,10,1,2,'6','-',25000,'Classic pickup truck'),
(UUID(), 'GMC Banshee', 'Pilot Aircraft', 'VTOL/VSTOL', '6','8',4,20,18,4,6,'12','24F',2500000,'Supersonic aircraft - a classic t-bird. Military grade.'),
(UUID(), 'Horizon Flying Eye', 'Pilot Aircraft','Minidrone','4','3',2,1,0,3,3,'-','8',2000,'Can roll on the ground and fly over obstacles; a version with built-in flashpak and smoke grenade costs an additional 500. Using them destroys the drone.');

select * from DronesAndVehicles;