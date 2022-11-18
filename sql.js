CREATE database customers

  GO
/*CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);*/
/*INSERT into persons(personID,LastName,FirstName,Address,City) 
  VALUES ('1','blue','burge','1234','turkey')

GO
select *from persons*/

create table salesproducts(
ProductsID int,
Product varchar(255),
Sales int,
);
GO
INSERT into salesproducts(ProductsID,Product,Sales) 
  VALUES (1,'book','sold')
  GO
  select *from salesproducts