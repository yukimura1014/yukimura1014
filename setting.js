const Setting_File = './default.txt'

function setTable(file_path,tableId){
    //設定ファイルをオープン
    const xhr = new XMLHttpRequest();
    //取得するファイルの設定
    xhr.open('get', file_path);
    xhr.send();
  
    xhr.onreadystatechange = function() {
        //通信が正常に完了したか確認
        if( xhr.readyState === 4 && xhr.status === 200) {
            //ファイルの値を配列に格納
            var data_list = xhr.responseText.split(/,|\r\n|\n/);
            // 表の作成開始
            var rows=[];
            var table = document.createElement("table");

            // 表に配列の要素を格納
            for(i = 0,k = 0; i < data_list.length; i=i+3,k++){
                rows.push(table.insertRow(-1));  // 行の追加
                for(j = 0; j < 3; j++){
                    cell=rows[k].insertCell(-1);
                    cell.appendChild(document.createTextNode(data_list[i+j]));
                    // 背景色の設定
                    cell.style.backgroundColor = "#bbb"; // ヘッダ行
                }
            }
            // 指定したdiv要素に表を加える
            document.getElementById(tableId).appendChild(table);
            document.getElementById(tableId).contentEditable = true;
        }
    }
}

function saveClick(){
    
    //テーブルデータの配列読み込み
    var data = [];
    
    var tr = $("table tr");//全行を取得
    for( var i=0,l=tr.length;i<l;i++ ){
        var cells = tr.eq(i).children();//1行目から順にth、td問わず列を取得
        for( var j=0,m=cells.length;j<m;j++ ){
            if( typeof data[i] == "undefined" ){
                data[i] = [];
            }
            data[i][j] = cells.eq(j).text();//i行目j列の文字列を取得
        }
    } 
    //コンソールに出力してみる
    alert(data);
    //ファイルに保存
}


window.onload = function() {
    //Searchボタンにイベントを登録
    let saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', saveClick);  
  
    //設定ファイルをテーブルへ反映
    setTable(Setting_File,"table");
}
