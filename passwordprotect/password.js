  function checkPswd() {
        //Is this school IT? If ur not you are probably acually smart so take the password.
        var confirmPassword = "345";
        //(i cant figure out how to make server side password)
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             hidden();
             closePasswordWindow();
        }
          //send to incorrect password page
        else{
            closePasswordWindow();
        }
    }

function closePasswordWindow() {
    window.close();
}


        function hidden() {
      var win = window.open()
      win.document.title = "Hidden Hub";
      var url = "https://totallyaboutblank-nothing-else.totallygoogledrive.repl.co/hh.html"
          //congrats you found the link too.
          //i hate you
      var iframe = win.document.createElement('iframe')
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.src = url
      win.document.body.appendChild(iframe)
        }