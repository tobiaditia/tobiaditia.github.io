$(document).ready(function(){
    let alphabetToArray = 'abcdefghijklmnopqrstuvwxyz'.split(''); //merubah alphabet ke array
    
    $('#generate').on('click', function () {

        var keyText = $('#kunci').val();
        var plaintext = $('#plaintext').val();

        var plainTextToArray = plaintext.split(''); //merubah plain text ke array

        var keyTextToArray = keyText.split(''); //merubah key/kunci ke array

        var keyIndexNow = 0;
        var keyTextGenerate = ''; //untuk menyimpan kunci yang sama panjang dengan plaintext

        // proses generate key text menjadi sepanjang plaintext
        for (let index = 0; index < plainTextToArray.length; index++) {
            if (plainTextToArray[index] == ' ') { //jika ada spasi di plaintext
                keyTextGenerate += ' ';
            } else {
                keyTextGenerate += keyTextToArray[keyIndexNow]; //menambah huruf ke keyTextGenerate dengan urutannya
                if (keyIndexNow == keyTextToArray.length - 1) { //apabila huruf di key sudah habis maka mengulang dari awal
                    keyIndexNow = 0;
                } else {
                    keyIndexNow++;
                }
            }
        }

        var keyTextGenerateToArray = keyTextGenerate.split(''); //merubah hasil generate key ke array
        var chiperText = ''; //untuk menyimpan hasil/chipertext

        for (let index = 0; index < plainTextToArray.length; index++) {
            if (plainTextToArray[index] == ' ') { //jika ada spasi di plaintext
                chiperText += ' ';
            } else {
                var indexPlainText = alphabetToArray.indexOf(plainTextToArray[index]); //mencari no index dari setiap plaintext
                var indexKeyText = alphabetToArray.indexOf(keyTextGenerateToArray[index]); //mencari no index dari setiap keytext

                chiperText += alphabetToArray[(indexPlainText + indexKeyText) % alphabetToArray.length]; // proses huruf untuk chipertext 
            }
            
        }

        $('#chipertext').val(chiperText);

    });

    $('#clear').on('click', function () { 
        $('#plaintext').val('');
        $('#kunci').val('');
        $('#chipertext').val('');
    });
});