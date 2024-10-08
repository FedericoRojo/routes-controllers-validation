const userStorage = require("../storages/usersStorage");
const {body, validationResult} = require("express-validator");

exports.searchUser = (req,res) => {
    const {firstName, lastName, email} = req.query;
    let result = [];
    const allUsers = userStorage.getUsers();
    for(let i = 0; i < allUsers.length; i++){
        if( ( allUsers[i].firstName == firstName) && 
            ( (lastName.length==0) || ((lastName.length !== 0) && allUsers[i].lastName == lastName ) ) &&
            ( (email.length==0) || ( (email.length !== 0) && allUsers[i].email == email )) 
        ){
            
            result.push(allUsers[i]);
        }
    }

    let message = "";
    if( result.length == 0){
        message = `No user found with FirstName: ${lastName}`;
        if(lastName.length != 0){
            message += `and Lastname ${lastName}`;
        }
        if(email.length != 0){
            message += `and email ${email}`;
        }
    }

    res.render("search", {
        title: "Search users",
        users: result,
        message: message,
    });
} 


