//検索処理*************************************************************************
function searchText(){//検索処理
    
  //テキストボックスの文言取得
  let searchText = document.getElementById('searchText');  
      
  //コンボボックスの値を取得
  let siteName = document.getElementById('searchSite');
  
  if (siteName.options[siteName.selectedIndex].title == '0'){
    var url = siteName.options[siteName.selectedIndex].value + searchText.value;
  }
  else{
    var url = siteName.options[siteName.selectedIndex].value + '"' + searchText.value + '"';
  }
   
  window.open(url);
}
//********************************************************************************

//検索ボタン処理********************************************************************
function searchClick(){//Searchボタン押下処理
  searchText();
}
//********************************************************************************

//テキストボックスのイベントハンドラ**************************************************
function keyEnter(e){//テキストボックスのキー押下対応
  if (e.keyCode == 13) {//Enterキー押下時
    searchText();
  }  
  return false;
}
//*************************************************************************************

//SelectBoxの値を設定******************************************************************
function selectboxChange(file_path){
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

        //セレクトボックスの値を設定
      let searchSite = document.getElementById('searchSite');

      //option要素を初期化
      while (searchSite.lastChild){
        searchSite.removeChild(searchSite.lastChild)
      }

      let i = 0;
      do {
        var optionSite = document.createElement('option');
        //option要素にvalueと表示名を設定
        optionSite.textContent = data_list[i];//表示
        optionSite.value = data_list[i+1];//Value(URL)
        optionSite.title = data_list[i+2];//使ってない値をFlagに使用
      
        //select要素にoption要素を追加する
        searchSite.appendChild(optionSite);
        i = i +3;
      }while(i < data_list.length);
    }
  }
}
//*************************************************************************************

//メイン処理************************************************************************
window.onload = function() {
  const Setting_File = './default.txt'

  //Searchボタンにイベントを登録
  let searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', searchClick);  

  //テキストボックスにイベントを登録
  let searchbox = document.getElementById('searchText');
  searchbox.addEventListener('keypress', keyEnter);

  //セレクトボックスの値を設定
  let file = Setting_File;
  selectboxChange(file);
}