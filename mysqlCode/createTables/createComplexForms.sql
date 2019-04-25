use crhdybcsctttyd85;

create table if not exists ComplexForms (
  comForm_id varchar(36) not null primary key, 
  comForm_name varchar(36) not null, 
  comForm_target varchar(36) not null, 
  comForm_FV varchar(10) not null, 
  comForm_dur varchar(3) not null, 
  comForm_testType varchar(20) not null, 
  comForm_test varchar(50) not null, 
  comForm_desc text not null
);

select * from ComplexForms;
