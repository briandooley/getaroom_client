$fh.cloud(
    {
      path: 'hello',
      method: 'GET',
      contentType: 'application/json'
    },
    function (res) {
      console.log(res);
      var style = '';
      var output = '';
      for (i = 0; i < res.length; i++) {
        switch(res[i].rank) {
        case 0:
            style = '<p style="background-color:#fb122f;">';
            break;
        case 9999:
            style = '<p style="background-color:#27e833;">';
            break;
        default:
            style = '<p style="background-color:#fad201;">';
        }

        output = output + style + res[i].room + ' - ' + res[i].text + '</p>';
        console.log(output);
      }
      console.log(output);
      document.getElementById('cloudResponse').innerHTML = output;
    },
    function (code, errorprops, params) {
      alert('An error occured: ' + code + ' : ' + errorprops);
    }
);
