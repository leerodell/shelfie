-- initial data
drop table if exists products;
create table products (
product_id serial primary key,
product_name text not null,
product_type text not null,
quantity integer not null
);

insert into products (product_name, product_type, quantity)
values ('teddy', 'toy', 5), ('wrench', 'tool', 100), ('galaxy', 'phone', 1);