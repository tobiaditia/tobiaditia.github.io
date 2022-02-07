$(document).ready(function(){
    $("#btnCopyEncrypt").click(function () {
        $("#chipertext").select();
        document.execCommand('copy');
    });

    $("#btnCopyDecrypt").click(function () {
        $("#plaintextInDec").select();
        document.execCommand('copy');
    });

});