<?php
$path = "../uploads/".$_POST["filename"];
if ($path!="../uploads/" && file_exists($path)) {
header('Accept-Ranges: bytes');  // For download resume
header('Cache-Control: must-revalidate, post-check=0, pre-check=0' );
header('Content-Description: File Transfer' );
header('Content-Disposition: attachment; filename="'.basename( $path ).'"' );
header('Content-Length: ' . filesize($path));  // File size
header('Content-Transfer-Encoding: binary');  // For Gecko browsers mainly
header('Content-Type: application/octet-stream' );
header('Expires: 0' );
header('Last-Modified: ' . gmdate('D, d M Y H:i:s', filemtime($path)) . ' GMT');
header('Pragma: no-cache' );
ob_clean();
flush();
readfile($path);
}
else {
?>    <link rel="stylesheet" href="../styles/styles.css">
<button style="position: relative;width: 96%;left:2%;" class="yesil-kutu" onclick="location.href='/index.html';"><</button>
<div style="position: absolute;top: 10%;width: 99%;height: 80%">
    <div class="renkli-kutu">
        <textarea style="left: 1%; max-width: 99%; width: 99%; height: 80%;" disabled name="textoutput" id="textoutput" placeholder="There is any file.">bir hata olustu</textarea></div></div>
<?php
}
?>