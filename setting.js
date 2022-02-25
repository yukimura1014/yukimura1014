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

            for (let i = 0;i < data_list.length;i++){
                let data_table = document.createElement('tr');
                data_table.appendChild(tr);
                data_table.textContent = data_list[i];
                document.getElementById('table').appendChild(data_table);
                data_table.appendChild(td);
            }
        }
    }
}

setTable(Setting_File,"table");