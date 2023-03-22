window.onload = function() {
  document.getElementById('try').innerHTML = 'trytry'
}


let Button = document.querySelector('button');

function send() {
  let idd = document.querySelector('#iddValue').value;
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let member = document.querySelector('#memberValue').value;
  let birthday = document.querySelector('#birthdayValue').value;
  let age = document.querySelector('#ageValue').value;
  let gender = document.querySelector('#genderValue').value;
  let relationship = document.querySelector('#relationshipValue').value;


  $.ajax({
    data: {
	"idd": idd,
	"name": name,
	"phone":phone,
	"member":member,
	"birthday":birthday,
	"age": age,
	"gender":gender,
	"relationship":relationship,


    },
    url: "https://script.google.com/macros/s/AKfycbzWPk2l0sTfK6M8rn41_SMUU59FNa2Zb-h9Erp5AlWW6eGSmS9JO5foJZBDkGOJoPlLbg/exec",
    success: function(response) {
      if(response == "存入成功"){
        alert("存入成功");
      }
    },
  });
};

Button.addEventListener('click', send);
