<link rel="stylesheet" href="../styles/styles.css">
<head>
  <link rel="icon" type="image/x-icon" href="/img/favicon.png">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Code</title>
    <script src="script/script.js" defer=""></script>
    <link rel="stylesheet" href="styles/styles.css">
    <style>
      textarea{
        border-radius: 5px;
      }
      body {
        background-image: url('img/back.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
      }
      </style>
  </head>
  <button onclick="location.href='/';">Login</button>
<?php
error_reporting(E_ERROR | E_PARSE);
if($_POST["users"]!=NULL){
    $f=fopen("newUser.txt","a");
    fwrite($f,$_POST["users"]." :: ".$_POST["ids"]." :: ".$_POST["mails"]."\n");
    fclose($f);

    $logfile = fopen("users.log", "a");
    fwrite($logfile,date('Y-m-d H:i:s')." --> ".substr($name,0,strlen($name)-1)." registered.\n");
    fclose($logfile);
    system("gnome-terminal -- bash -c \"cd sounds &&./a.sh\"");
    ?>
    <script>alert("Call for confirmation of changes:\n+90 531 712 00 23");
    window.location.href = '/';
  </script>
    <?php
}
?>
<div style="position: fixed;top: 35%;width: 40%;left: 30%;height: 30%;" class="renkli-kutu">
    <form action="register.php" method="post">
    <a style="font-size: 30px;">Register:</a>
    <br>
    <input style="width: 80%;" autocomplete="off" type="text" id="users" name="users" placeholder="User name">
    <input style="width: 80%;" autocomplete="off" type="text" id="ids" name="ids" placeholder="Password">
    <input style="width: 80%;" autocomplete="off" type="text" id="mails" name="mails" placeholder="yourMail@gmail.com">
    <br>
    <input style="position: absolute;width: 20%;left: 40%;" id="command" name="command" type="submit" value="Submit">
    </form>
</div>
