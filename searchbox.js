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
    
    let siteOption = site_url[siteName.options.selectedIndex][2];
    
    if (siteOption === '0'){
      var url = site_url[siteName.options.selectedIndex][1] + searchText.value;
    }
    else {
      var url = site_url[siteName.options.selectedIndex][1] + '"'+ searchText.value + '"';
    }
      window.open(url);
  }
  //********************************************************************************

  //検索ボタン処理********************************************************************
  function searchClick(){//Searchボタン押下処理
    searchText(this.site_url);
  }
  
  //テキストボックスのイベントハンドラ**************************************************
  function keyEnter(e){//テキストボックスのキー押下対応
    if (e.keyCode == 13) {//Enterキー押下時
      searchText(this.site_url);
    }  
          return false;
  }
  
  function OnSettingClick(){
    alert("リンクがクリックされました");
  }


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
  //Debug用
  let msg = document.getElementById('msg');
  //msg.innerText = "Debug";
  
  //セレクトボックスの値を設定
  let searchSite = document.getElementById('searchSite');
  
  
  for (let i=0; i < site_url.length; i++){
    //option要素を新しく作る
    let optionSite = document.createElement('option');
  
    //option要素にvalueと表示名を設定
    optionSite.value = site_url[i][0];
    optionSite.textContent = site_url[i][0];
    
    //select要素にoption要素を追加する
    searchSite.appendChild(optionSite);
  }
  