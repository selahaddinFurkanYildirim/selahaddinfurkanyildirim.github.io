<link rel="stylesheet" href="../styles/styles.css">
<button style="position: relative;width: 96%;left:2%;" class="yesil-kutu" onclick="location.href='/index.html';"><</button>
<div class="renkli-kutu" style="position: absolute;top: 10%;width: 98%;height: 85%;">
<?php 
$message=shell_exec("cd ../uploads && ls");
$yukseklik=0;
if($message!=""){
for ($i=0; $i < strlen($message); $i++) { 
    $j=$i;
    $yukseklik+=75;
    if ($i<strlen($message)) {
        for(;$i<strlen($message) && $message[$i]!=$message[strlen($message)-1] && $message[$i]!=" ";$i++);
        echo("<a style=\"height: 60px\"><a style=\"position: absolute;top: ".$yukseklik."px;left: 17%;\" class=\"renkli-kutu\" target=\"_blank\" href=\"../uploads/".substr($message,$j,$i-$j)."\">".substr($message,$j,$i-$j)."</a></a><br>");
    }
    $j=$i;
    $i++;
    if ($i<strlen($message)) {
        for(;$i<strlen($message) && $message[$i]!=$message[strlen($message)-1] && $message[$i]!=" ";$i++);
        echo("<a style=\"height: 60px\"><a style=\"position: absolute;top: ".$yukseklik."px;\" class=\"renkli-kutu\" target=\"_blank\" href=\"../uploads/".substr($message,$j,$i-$j)."\">".substr($message,$j,$i-$j)."</a></a><br>");
    }
    $j=$i;
    $i++;
    if ($i<strlen($message)) {
        for(;$i<strlen($message) && $message[$i]!=$message[strlen($message)-1] && $message[$i]!=" ";$i++);
        echo("<a style=\"height: 60px\"><a style=\"position: absolute;top: ".$yukseklik."px;right: 17%;\" class=\"renkli-kutu\" target=\"_blank\" href=\"../uploads/".substr($message,$j,$i-$j)."\">".substr($message,$j,$i-$j)."</a></a>");
    }
}
}
else{
  echo"Burası Boş";
}
?>
</div>