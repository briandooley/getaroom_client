document.getElementById('say_hello').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        path: 'hello',
        method: 'GET',
        contentType: 'application/json',
        data: {
          hello: document.getElementById('hello_to').value
        }
      },
      function (res) {
        console.log(res);
        var output = '';
        for (i = 0; i < res.length; i++) {
          console.log(res[i].room + ' - ' + res[i].text);
          output = output + res[i].room + ' - ' + res[i].text + '\n\n';
        }
        document.getElementById('cloudResponse').innerHTML = "<p>" + output + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};
