$fh.init(function(){
    // Initialisation is now complete, you can now make $fh.cloud request
    console.log('success');
  }, function(err){
    // Init failed
    console.log('failed');
});

document.getElementById('say_hello').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        path: 'hello',
        method: 'GET',
        contentType: 'application/json'
      },
      function (res) {
        console.log(res);
        var output = '<p>';
        for (i = 0; i < res.length; i++) {
          console.log(res[i].room + ' - ' + res[i].text);
          output = output + res[i].room + ' - ' + res[i].text + '<p>';
        }
        document.getElementById('cloudResponse').innerHTML = output;
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};
