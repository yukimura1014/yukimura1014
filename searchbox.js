//各サイトのURL
let site_url = [
    ['Google','https://www.google.co.jp/search?q=','0'],
    ['Youtube','https://www.youtube.com/results?search_query=','0'],
    ['Qiita','https://qiita.com/search?q=','0'],
    ['Twitter','https://twitter.com/search?q=','0'],
    ['Note','https://note.com/search?q=','0']
  ]
  
  
//検索処理*************************************************************************
function searchText(site_url){//検索処理
    
  //テキストボックスの文言取得
  let searchText = document.getElementById('searchText');  
      
  //コンボボックスの値を取得
  let siteName = document.getElementById('searchSite');
    
  var url = siteName.options[siteName.selectedIndex].value + searchText.value;
   
  window.open(url);
}
//********************************************************************************

//検索ボタン処理********************************************************************
function searchClick(){//Searchボタン押下処理
  searchText(this.site_url);
}
//********************************************************************************


//テキストボックスのイベントハンドラ**************************************************
function keyEnter(e){//テキストボックスのキー押下対応
  if (e.keyCode == 13) {//Enterキー押下時
    searchText(this.site_url);
  }  
  return false;
}
//********************************************************************************
  
function OnSettingClick(site_url){
  let site_url2 = [
    ['Qiita2','https://qiita.com/search?q=','0'],
    ['Twitter2','https://twitter.com/search?q=','0'],
    ['Google2','https://www.google.co.jp/search?q=','0'],
    ['Youtube2','https://www.youtube.com/results?search_query=','0'],
    ['Note2','https://note.com/search?q=','0']
  ]
  
  site_url = site_url2;

  //セレクトボックスの値を設定
  let searchSite = document.getElementById('searchSite');


  //option要素を新しく作る
  while (searchSite.lastChild){
    searchSite.removeChild(searchSite.lastChild)
  }

  for (let i=0; i < site_url.length; i++){
    var optionSite = document.createElement('option');
    
    //option要素にvalueと表示名を設定
    optionSite.textContent = site_url[i][0];//表示
    optionSite.value = site_url[i][1];//Value(URL)
      
    //select要素にoption要素を追加する
    searchSite.appendChild(optionSite);
  }
}

  /*function OnSettingClick(site_url){
    let site_url2 = [
      ['Qiita2','https://qiita.com/search?q=','0'],
      ['Twitter2','https://twitter.com/search?q=','0'],
      ['Google2','https://www.google.co.jp/search?q=','0'],
      ['Youtube2','https://www.youtube.com/results?search_query=','0'],
      ['Note2','https://note.com/search?q=','0']
    ]
  
    site_url = site_url2;

    //セレクトボックスの値を設定
    let searchSite = document.getElementById('searchSite');


    //option要素を新しく作る
    while (searchSite.lastChild){
      searchSite.removeChild(searchSite.lastChild)
    }

    for (let i=0; i < site_url.length; i++){
      var optionSite = document.createElement('option');
      //option要素にvalueと表示名を設定
      optionSite.textContent = site_url[i][0];//表示
      optionSite.value = site_url[i][1];//Value(URL)
      
      //select要素にoption要素を追加する
      searchSite.appendChild(optionSite);
    }
  }
*/
//メイン処理************************************************************************
//Searchボタンにイベントを登録
let searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', {site_url: site_url, handleEvent: searchClick});
  
//テキストボックスにイベントを登録
let searchbox = document.getElementById('searchText');
searchbox.addEventListener('keypress', {site_url: site_url, handleEvent: keyEnter});

//設定リンクにイベントを登録
let settinglink = document.getElementById('settingLink');
settinglink.addEventListener('click', {site_url:site_url, handleEvent: OnSettingClick})
    
//セレクトボックスの値を設定
let searchSite = document.getElementById('searchSite');
  
for (let i=0; i < site_url.length; i++){
  //option要素を新しく作る
  let optionSite = document.createElement('option');
  
  //option要素にvalueと表示名を設定
  optionSite.value = site_url[i][1];//設定値
  optionSite.textContent = site_url[i][0];//表示名
    
  //select要素にoption要素を追加する
  searchSite.appendChild(optionSite);
}

  
  