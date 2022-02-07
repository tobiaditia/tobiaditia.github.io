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
                var indexPlainText = alphabetToArray.indexOf(plainTextToArray[index].toLowerCase()); //mencari no index dari setiap plaintext , mengubah semua ke huruf kecil
                var indexKeyText = alphabetToArray.indexOf(keyTextGenerateToArray[index].toLowerCase()); //mencari no index dari setiap keytext , mengubah semua ke huruf kecil
                
                var indexProccess = (indexPlainText + indexKeyText) % alphabetToArray.length; //proses mencari index untuk plaintext dengan rumus
                chiperText += alphabetToArray[indexProccess]; // proses huruf untuk chipertext 

            }
            
        }

        $('#chipertext').val(chiperText);

    });

    $('#clear').on('click', function () { 
        $('#plaintext').val('');
        $('#kunci').val('');
        $('#chipertext').val('');
    });

    $('#generateInDec').on('click', function () {

        var keyText = $('#kunciInDec').val();
        var chipertext = $('#chipertextInDec').val();

        var chiperTextToArray = chipertext.split(''); //merubah plain text ke array

        var keyTextToArray = keyText.split(''); //merubah key/kunci ke array

        var keyIndexNow = 0;
        var keyTextGenerate = ''; //untuk menyimpan kunci yang sama panjang dengan chipertext

        // proses generate key text menjadi sepanjang chipertext
        for (let index = 0; index < chiperTextToArray.length; index++) {
            if (chiperTextToArray[index] == ' ') { //jika ada spasi di chipertext
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
        var plainText = ''; //untuk menyimpan hasil/plainText

        for (let index = 0; index < chiperTextToArray.length; index++) {
            if (chiperTextToArray[index] == ' ') { //jika ada spasi di chipertext
                plainText += ' ';
            } else {
                var indexChiperText = alphabetToArray.indexOf(chiperTextToArray[index].toLowerCase()); //mencari no index dari setiap chipertext
                var indexKeyText = alphabetToArray.indexOf(keyTextGenerateToArray[index].toLowerCase()); //mencari no index dari setiap keytext

                var indexProccess = (indexChiperText - indexKeyText) % alphabetToArray.length; //proses mencari index untuk plaintext dengan rumus
                plainText += alphabetToArray[(indexProccess < 0) ? indexProccess + 26 : indexProccess]; // proses mencari huruf berdasarkan index

            }

        }

        $('#plaintextInDec').val(plainText);

    });

    $('#clearInDec').on('click', function () {
        $('#plaintextInDec').val('');
        $('#kunciInDec').val('');
        $('#chipertextInDec').val('');
    });
});