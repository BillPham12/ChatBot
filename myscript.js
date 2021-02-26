var num = 1

const file = document.getElementById("FileCollector")
document.addEventListener("change",(event) =>{
  const fileList = event.target.files;
  console.log(fileList);})


/*
handling auto changing background image
*/

function submitFile(){
  alert("You have successfully submit your file")
}


/*
source code w3schools.com
handle menu
*/
function myMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 1; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
