let phoneBook = {};

function addContact(firstname,  phonenumber, email){
    phoneBook[firstname] = {phonenumber, email};
        console.log (firstname + " " + "added to the phone book.");
}

function searchContact(firstname){
    if (phoneBook[firstname]){
        console.log("Name:" + firstname);
        console.log("phoneNumber:" + phoneBook[firstname].phonenumber);
        console.log("Email:" + phoneBook[firstname].email);
    }else{
        console.log (firstname + " " + "not found in the phone book.");
    }
}

function updateContact(firstname, newphonenumber, newemail){
    if (phoneBook[firstname]) {
        phoneBook[firstname].phonenumber = newphonenumber;
        phoneBook[firstname].email = newemail;
        console.log(firstname + " " + "contact updated");
    } else{
        console.log (firstname + " " + "not found in the phone book.");
    }
}

function deleteContact (firstname){
    if (phoneBook[firstname]) {
        delete phoneBook[firstname];
        console.log(firstname + " " + "contact deleted");
    } else{
        console.log (firstname + " " + "not found in the phone book.");
    }
}


addContact("Alka", 3689654486, "alka@123.navgurukul.org");
addContact("sushmita", 6307657534, "sushmita22@navgurukul.org");
addContact("mahima", 7354657341, "mahima@navgurukul.org");
searchContact("Alka");
searchContact("mahima");
updateContact("Alka", 6737286879, "alka@navgurukul.org");
deleteContact("sushmita");
searchContact("sushmita");