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
        //console.log(res[i].room + ' - ' + res[i].text);

/*
        switch(res[i].rank) {
        case 0:
            style = '<p style="background-color:red;>';
            break;
        case 9999:
            style = '<p style="background-color:yellow;>';
            break;
        default:
            style = '<p style="background-color:green;>';

        }
*/

//        output = output + style + res[i].room + ' - ' + res[i].text + '</p>';
        output = output + '<p style="background-color:red;>' + res[i].room + ' - ' + res[i].text + '</p>';
        console.log(output);
      }
      console.log(output);
      document.getElementById('cloudResponse').innerHTML = output;
    },
    function (code, errorprops, params) {
      alert('An error occured: ' + code + ' : ' + errorprops);
    }
);
