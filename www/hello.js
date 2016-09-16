$fh.cloud(
    {
      path: 'hello',
      method: 'GET',
      contentType: 'application/json'
    },
    function (res) {
      console.log(res);
      var output = '<p><style="background-color:powderblue;">';
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
