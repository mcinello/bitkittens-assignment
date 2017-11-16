document.addEventListener('DOMContentLoaded', function(){
  var button = document.querySelector('button');
  var catBox1 = document.getElementById('cat1')

  button.addEventListener('click', function(e) {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    })
    .done(function(data){
      var imgTag = document.createElement('img');

      for (var i = 0; i < data.cats.length; i++) {
        imgTag.src = data.cats[i].photo;
        imgTag.alt = "Photo of " + data.cats[i].name
        catBox1.append(imgTag)
      };
    })
  });
});
