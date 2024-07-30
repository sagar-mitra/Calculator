const button = document.querySelectorAll("button");
const display1 = document.querySelector("#result");
const display2 = document.querySelector("#input");
let string = "";

console.log(button);



//after click the value will show in the display
button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    
      if (e.target.innerHTML == "="  ) {
        string = eval(string);
        display1.value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        display1.value = string;
        display2.value = string;
      } else if(e.target.innerHTML == "DEL"){
        string = string.substring(0,(string.length-1));
        display1.value = string;
      }
      
    else {
        string = string + e.target.innerHTML;
        display2.value = string;
      }
    
  });
});
