const button = document.querySelectorAll("button");
const display = document.querySelector("#result");
let string = "";

console.log(button);

//after click the value will show in the display
button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    
      if (e.target.innerHTML == "="  ) {
        string = eval(string);
        display.value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        display.value = string;
      } else if(e.target.innerHTML == "DEL"){
        string = string.substring(0,(string.length-1));
        display.value = string;
      }
    else {
        string = string + e.target.innerHTML;
        display.value = string;
      }
    
  });
});
