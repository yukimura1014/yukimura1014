const Setting_File = 'default.txt'

function setValue(file_path,viewId){
    //設定ファイルをオープン
    const xhr = new XMLHttpRequest();
    //取得するファイルの設定
    xhr.open('get', file_path);
    xhr.send();
  
    xhr.onreadystatechange = function() {
        //通信が正常に完了したか確認
        if( xhr.readyState === 4 && xhr.status === 200) {
            //ファイルの値をテキストボックスに表示
            var text_data = xhr.responseText;
            //指定の場所に表示
            //document.getElementById(viewId).innerHTML = text_data;
            document.forms.id_form1.id_textBox1.value = text_data;
        }
    }
}

function saveClick(){
    
    //テキストデータの読み込み

    //ファイルに出力
    var blob =new Blob([str],{type:"text/csv"}); //配列に上記の文字列(str)を設定
    var link =document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download ="default.txt";
    link.click();
    
}


window.onload = function() {
    //Saveボタンにイベントを登録
    let saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', saveClick);  
  
    //設定ファイルをテーブルへ反映
    setValue(Setting_File,"Edit_Text");
}
