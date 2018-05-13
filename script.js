function idCard(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").Value;
    let address = document.getElementById("address").value;
    
    document.getElementById("postFullName").innerHTML = firstName + lastName;
    document.getElementById("postAddress").innerHTML = address;

    let age = parseInt(document.getElementById("age").value);
    let phoneNumber = parseInt(document.getElementById("phoneNumber").value);

    let numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);
    
    for (let i = 0; i < numberArray.length; i++){
    if (numberArray[i] <= 100){
    document.getElementById("age").innerHTML = "Age: " + age;
    }
    else if (numberArray[i] > 100){
    document.getElementById("phoneNumber").innerHTML = "Phone Number: " + phoneNumber;
    }
    }

}