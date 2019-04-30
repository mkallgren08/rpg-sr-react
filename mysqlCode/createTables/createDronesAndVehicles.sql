use crhdybcsctttyd85;

create table if not exists DronesAndVehicles (
  droveh_id varchar(36) primary key not null,
  droveh_name varchar(36) not null,
  droveh_skill varchar(36) not null,
  droveh_type varchar(36) not null,
  droveh_handl varchar(10) not null,
  droveh_speed varchar(10) not null,
  droveh_accel integer not null,
  droveh_bod integer not null,
  droveh_armor integer not null,
  droveh_pilot integer not null,
  droveh_sensor integer not null,
  droveh_seats varchar(10) not null,
  droveh_avail varchar(10) not null,
  droveh_cost integer not null,
  droveh_notes text
);

alter table DronesAndVehicles
add constraint unique key(droveh_name);

select * from DronesAndVehicles;

