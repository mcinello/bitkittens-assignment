document.addEventListener('DOMContentLoaded', function(){
  var button = document.querySelector('button');

  button.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    })
  });
});
