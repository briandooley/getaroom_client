$fh.cloud(
    {
      path: 'hello',
      method: 'GET',
      contentType: 'application/json'
    },
    function (res) {
      console.log(res);
      var style = '';
      var output = '<p>';
      for (i = 0; i < res.length; i++) {
        console.log(res[i].room + ' - ' + res[i].text);
        switch(res[i].rank) {
        case 0:
            style = '<p style="background-color:red;></p>';
            break;
        case 9999:
            style = '<p style="background-color:yellow;></p>';
            break;
        default:
            style = '<p style="background-color:green;></p>';

        }
        output = output + style + res[i].room + ' - ' + res[i].text + '</p>';
      }
      document.getElementById('cloudResponse').innerHTML = output;
    },
    function (code, errorprops, params) {
      alert('An error occured: ' + code + ' : ' + errorprops);
    }
);
