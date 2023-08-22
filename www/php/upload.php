<html>
  <meta charset="UTF-8">
  <head>
    <link rel="stylesheet" href="../styles/styles.css">
  </head>
  <body>
  <link rel="stylesheet" href="styles.css">
<button style="position: relative;width: 96%;left:2%;" class="yesil-kutu" onclick="location.href='/index.html';"><</button>
<br>
    <?php
      function fnDosya_Adi_Duzelt($parVeri)
      {
        $strDonen_Deger = "";
        if (isset($parVeri))
        {
          $strDonen_Deger = preg_replace('/[^a-zA-Z0-9.]/', '-', $parVeri);
          for ($i=0; $i < strlen($strDonen_Deger); $i++) { 
            if($strDonen_Deger[$i]==" "){
              $strDonen_Deger[$i]="-";
            }
          }
        }
        return $strDonen_Deger;
      }
      if(isset($_FILES['fileToUpload']['name'])){
        $strDosya_Adi = $_FILES['fileToUpload']['name'];
        $strDosya_Adi = fnDosya_Adi_Duzelt($strDosya_Adi);
        $strDosya_Bellek_Yeri = $_FILES['fileToUpload']['tmp_name'];
        $strDosya_Tipi = $_FILES['fileToUpload']['type'];
        $strDosya_Boyutu = $_FILES['fileToUpload']['size'];   
        $strYuklenecek_Klasor = '../uploads/' . $strDosya_Adi;
        for ($i=1; file_exists($strYuklenecek_Klasor); $i++)
        {
          $fileext = (strpos($strDosya_Adi,'.')===false?'':'.'.substr(strrchr($strDosya_Adi, "."), 1));
          $filename = substr($strDosya_Adi, 0, strlen($strDosya_Adi)-strlen($fileext)).'['.$i.']'.$fileext;
          $strYuklenecek_Klasor = "../uploads/".$filename;
        }
        if (move_uploaded_file($strDosya_Bellek_Yeri, $strYuklenecek_Klasor)){
          exec("icacls ".$strYuklenecek_Klasor." /t /grant selah:F");
        }else{
          echo '
            <div class="kirmizi-kutu">
              Bir hata oluştu...
            </div>
            ';
            exit(0);
        }
      }
    ?>
    <div class="renkli-kutu" style="position:relative;top:20px;">
      <p>Yükleme Tamamlandı</p>
<textarea style="resize:none; min-width: 100%" disabled name="sondosyaadi" id="sondosyaadi" rows="1"><?php
echo(substr($strYuklenecek_Klasor, 11, strlen($strYuklenecek_Klasor)-11));
?></textarea>
      <br><br>
      <button id="copybutton" onclick="myFunction()">Copy text</button>
      <script>
      function myFunction() {
        // Get the text field
        var copyText = document.getElementById("sondosyaadi");

        // Select the text field
        copyText.select();
        console.log(copyText.value);
        unsecuredCopyToClipboard(copyText.value);
        // Alert the copied text
        
        var copyButton = document.getElementById("copybutton");
        var a=copyButton.textContent;
        copyButton.textContent ="Copied.";
        setTimeout(function () {
          copyButton.textContent =a;
        }, 1000);
      }
      function unsecuredCopyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Unable to copy to clipboard', err);
        }
        document.body.removeChild(textArea);
      }
      </script>
    </div>
  </body>
</html>