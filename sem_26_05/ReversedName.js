let form = document.querySelector('form');
let input = document.querySelector('input');
let output = document.querySelector('p');

class Name {
  constructor() {
    this.username = "";
  }
 
  reverseName(name) {
    //this.username.split('').reverse().join('');
    let message = this.username.split('').reverse().join('');
    output.textContent = message;
  }
}
const helloObj = new Name();

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let name = input.value;
  helloObj.sayHello(name);
});
