 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDf1ubAgfks1c7JVU1Ki8Ze1HsjSCt_xD4",
    authDomain: "online-shopping-site.firebaseapp.com",
    databaseURL: "https://online-shopping-site.firebaseio.com",
    projectId: "online-shopping-site",
    storageBucket: "online-shopping-site.appspot.com",
    messagingSenderId: "651894769620"
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
    var name = getInputVal('name');
     var comfirmation = getInputVal('confirmation');
     var email = getInputVal('email');
     var phone = getInputVal('phone');
     
    
     
    //save message
    saveMessage(name,email, phone, comfirmation);
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

function saveMessage(name,  email , phone , comfirmation){
    
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
       comfirmation: comfirmation
    });
    
}



















