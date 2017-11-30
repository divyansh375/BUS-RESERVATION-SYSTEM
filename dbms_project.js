var express=require('express');
var app=express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.use(express.static('webtech'));
var mysql = require('mysql');




var con = mysql.createConnection({
  host: "localhost",
  user: "16BIT0375",
  password: "1234",
  database: "db1"
});



con.connect(function(err) {
  if (err) throw err;



app.get("/get_pro",function(req,res)
{

var mysql = require('mysql');





console.log("Connected!");







var sql="INSERT INTO Userr(u_id,u_dob,u_first,u_last, u_gender,u_email,u_password) VALUES (6,'"+req.query.dob+"','"+req.query.f_name+"','"+req.query.l_name+"','"+req.query.male+"','"+req.query.email+"','"+req.query.password+"')";


  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
res.redirect("/homepage.html");

  });
});



app.get("/pro_get4",function(req,res)
{







console.log("Connected!");


var sql="INSERT INTO Passenger(p_id,p_first,p_last,p_age,p_phone_no,p_gender,b_no2,u_id1) VALUES ('"+req.query.p_id+"','"+req.query.f_name+"','"+req.query.l_name+"','"+req.query.age+"','"+req.query.phone+"','"+req.query.male+"',1,1)";


  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");

});






if(req.query.age>60)
{

var sql1="set @pri='yes'";
var sql2="set @f_fare=200";
}

else if(req.query.age<60 && req.query.age>10)
{
var sql1="set @pri='no'";
var sql2="set @f_fare=200";
}
else if(req.query.age<10)
{
var sql1="set @pri='yes'";
var sql2="set @f_fare=100";
}



var sql3="INSERT INTO Ticket_and_Bill(t_no,taxes,travel_fare,privilage,date_of_journey,seat_no,source,destination,b_no1,p_id1) VALUES (1,120,@f_fare,@pri,'"+req.query.date+"',12,'"+req.query.from+"','"+req.query.to+"','"+req.query.b_no1+"','"+req.query.p_id+"')";



  con.query(sql1, function (err, result) {
    if (err) throw err;
   
});


  con.query(sql2, function (err, result) {
    if (err) throw err;
   
});


  con.query(sql3, function (err, result) {
    if (err) throw err;
console.log("1 ro inserted");

   
});


res.redirect("/homepage.html");



});
});



app.get("/pro_get1",function(req,res)
{


if(req.query.username=='divyansh' && req.query.password=='hello')
{
res.redirect("/after_login_dbms.html");
}


else
{



var sql="SELECT u_password FROM userr where u_first='"+req.query.username+"' and u_password='"+req.query.password+"'";
con.query(sql, function (err, result) {
    if (err) throw err;
   
if(result[0].u_password==req.query.password)
{
res.redirect("/book_new_ticket_dbms.html");
}
});
}



});

app.get("/pro_get2",function(req,res)
{

res.redirect("/create_new_bus_dbms.html");
});

app.get("/get_pro_bus",function(req,res)
{

var sql="INSERT INTO Bus(b_no,b_type,no_of_seats,d_id1,c_id1) VALUES ('"+req.query.b_no+"','"+req.query.b_type+"','"+req.query.no_of_seats+"',1,1)";


  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});

res.send("succussfully created new bus");
});


app.get("/pro_get_passenger",function(req,res)
{



var sql="SELECT * FROM PASSENGER";


  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 table retrieved");
	res.send(result);

});
});


app.get("/pro_get_route",function(req,res)
{
res.redirect("/new_route_dbms.html");
});


app.get("/pro_set_route",function(req,res)
{


var sql="INSERT INTO Route(r_id,r_distance,r_name) VALUES ('"+req.query.r_id+"','"+req.query.r_distance+"','"+req.query.r_name+"')";


  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
res.send("create new route");
});


});






app.get("/set_route_and_bus",function(req,res)
{


var sql="INSERT INTO Runs_on(b_no3,r_id1) VALUES ('"+req.query.b_no3+"','"+req.query.r_id1+"')";


  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
res.send("create new route");
});




});


app.get("/link",function(req,res)
{
res.redirect("route_and_bus_dbms.html");
});



app.get("/get_details",function(req,res)
{

var sql="SELECT * FROM  BUS";


  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
res.send(result);
});


});
app.listen(8081,'127.0.0.1');

