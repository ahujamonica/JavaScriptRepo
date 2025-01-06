// There are two types of memory : stack and heap
// stack: for primitive datatypes: it stores the copy
// heap: for non primitive datatypes: works on references

let myName = "Daughter_of_christ"
let anothername = myName // has a cpopy of myName

anothername = "Monicaaa"
console.log(anothername);
console.log(myName);

let user1 = {
    email:"user@gmail.com" ,
    upi:"idk"
}

let user2 = user1
user2.email = "monica@gmail.com"
console.log(user1.email);
console.log(user2.email);