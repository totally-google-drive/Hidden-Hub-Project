    function sendMessage() {
  const request = new XMLHttpRequest();
  var x = Date()
  const ipifyUrl = 'https://api.ipify.org?format=json';

  // Make a request to ipify to get the public IP address
  const ipRequest = new XMLHttpRequest();
  ipRequest.open('GET', ipifyUrl);
  ipRequest.onload = function() {
    if (ipRequest.status === 200) {
      const ipData = JSON.parse(ipRequest.responseText);
      const publicIp = ipData.ip;
      
      // Add the public IP address to the message content
      const params = {
        username: "Visitbot9000",
        avatar_url: "",
        content: "Someone visited the HiddenHub at: " + "    " + x
      }

      request.open("POST", "https://discord.com/api/webhooks/1076764909557264505/WvvHdfAfkw7ZBAj2ESDrTzsJ6OJ6HESYujit57xaTBoqVDD0EMaZ2T1aPpKxT9iSNvpC");
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify(params));
    }
  };
  ipRequest.send();
}
