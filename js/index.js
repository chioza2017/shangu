
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2QKE-uruVrmQHXsqluo_-Ze6YpWQvSEY",
    authDomain: "contact-b023e.firebaseapp.com",
    databaseURL: "https://contact-b023e.firebaseio.com",
    projectId: "contact-b023e",
    storageBucket: "contact-b023e.appspot.com",
    messagingSenderId: "995024257615"
  };
  firebase.initializeApp(config);


//reference messages collection

var messageRef = firebase.database().ref('message');


//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();
   
    
    //get values
    var itemName = getInputVal('price');
     var color = getInputVal('s');
     var email = getInputVal('email');
     var phone = getInputVal('phone');
     var message = getInputVal('message');
    
     console.log(123);
    //save message
    saveMessage(itemName, color, email, phone, message);
    //show alert
    document.querySelector('.alert').style.display = 'block';
    
    //hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
   ///clear form
    document.getElementById('contactForm').reset();
    
}

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}


//save message to firebase

function saveMessage(itemName, color, email , phone , message){
    
    var newMessageRef = messageRef.push();
    newMessageRef.set({
       itemName: itemName,
        color:color,
        email: email,
        phone: phone,
        message: message
    });
    
}



















