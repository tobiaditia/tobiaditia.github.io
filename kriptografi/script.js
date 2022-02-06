$(document).ready(function(){
    
    $('#generate').on('click', function () {
        
        let alphabetToArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

        var keyText = $('#kunci').val();
        var plaintext = $('#plaintext').val();
        
        // var withoutSpacePlainText = plaintext.replace(/ /g, '');
        // var withoutSpacePlainTextToArray = withoutSpacePlainText.split('');

        var withoutSpacePlainTextToArray = plaintext.split('');

        var keyTextToArray = keyText.split('');

        var keyIndexNow = 0;
        var keyTextGenerate = '';

        // proses generate key text menjadi sepanjang plaintext
        for (let index = 0; index < withoutSpacePlainTextToArray.length; index++) {
            if (withoutSpacePlainTextToArray[index] == ' ') { //jika ada spasi di plaintext
                keyTextGenerate += ' ';
            } else {
                keyTextGenerate += keyTextToArray[keyIndexNow];
                if (keyIndexNow == keyTextToArray.length - 1) {
                    keyIndexNow = 0;
                } else {
                    keyIndexNow++;
                }
            }
        }

        var keyTextGenerateToArray = keyTextGenerate.split('');
        var chiperText = '';

        for (let index = 0; index < withoutSpacePlainTextToArray.length; index++) {
            if (withoutSpacePlainTextToArray[index] == ' ') { //jika ada spasi di plaintext
                chiperText += ' ';
            } else {
                keyTextGenerate += keyTextToArray[keyIndexNow];
                if (keyIndexNow == keyTextToArray.length - 1) {
                    keyIndexNow = 0;
                } else {
                    var indexPlainText = alphabetToArray.indexOf(withoutSpacePlainTextToArray[index]);
                    var indexKeyText = alphabetToArray.indexOf(keyTextGenerateToArray[index]);

                    chiperText += alphabetToArray[(indexPlainText + indexKeyText) % alphabetToArray.length];
                }
            }
            
        }

        $('#chipertext').html(chiperText);

    });

    $('#clear').on('click', function () { 
        $('#plaintext').val('');
        $('#kunci').val('');
        $('#chipertext').html('');
    });
});