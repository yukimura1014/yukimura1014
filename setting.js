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
            var rows=[]; var table = document.createElement("table");

            let i = 0;
            // 表に配列の要素を格納
            do {
                rows.push(table.insertRow(-1));  // 行の追加
                for(j = i; j < (i + 3); j++){
                    cell=rows[i].insertCell(-1);
                    cell.appendChild(document.createTextNode(data_list[j]));
                    // 背景色の設定
                    if(i == 0){
                        cell.style.backgroundColor = "#bbb"; // ヘッダ行
                    }else{
                        cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
                    }
                }
                i = i + 3;
            }while (i < data_list.length);
        }
    }
    // 指定したdiv要素に表を加える
    document.getElementById(tableId).appendChild(table);
}

setTable(Setting_File,"table");