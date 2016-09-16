setInterval(timer, 10000);

function timer(){
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
            style = '<p style="background-color:#fb122f;font-family:Arial;">';
            break;
        case 9999:
            style = '<p style="background-color:#27e833;font-family:Arial;">';
            break;
        default:
            style = '<p style="background-color:#fad201;font-family:Arial;">';
        }

        console.log(formatRoom(res[i].room));
        output = output + style + formatRoom(res[i].room) + ' - ' + res[i].text + '</p>';
        console.log(output);
      }

      console.log(output);
      document.getElementById('cloudResponse').innerHTML = output;
    },
    function (code, errorprops, params) {
      alert('An error occured: ' + code + ' : ' + errorprops);
    }
);
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

formatRoom = function (rm) {
    return (rm.replace('wat-', '').capitalize());
};


