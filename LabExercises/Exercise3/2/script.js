const data = [
    { name: 'Bob', age: 23 },
    { name: 'Alice', age: 39 }
  ];


  function addCard(title, ageValue) {
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = ageValue;
    document.getElementById('card-list').appendChild(template);
  }
  
  data.forEach(person => {
    addCard(person.name, person.age);
  });



  /*function addCard(title, text) {
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = text;
    document.getElementById('card-list').appendChild(template);
  }

  data.forEach(person => {
    addCard(person.name, `Age: ${person.age}`);
  });*/

