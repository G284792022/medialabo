// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#hantei');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="yoyo"]');
  let yoso = i.value;
  yoso = yoso - 0;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  
  let kaa = document.querySelector('span#kaimenoyoso');
  kaa.textContent = '回目の予想: ';

  kaisu = kaisu + 1;

  let sk = document.querySelector('span#kaisu');
  sk.textContent = kaisu; 
  let ak = document.querySelector('span#answer');
  ak.textContent = yoso; 
  let rp = document.querySelector('p#result');
  

  if (kaisu > 0 && kaisu < 3){
    
    if(kotae === yoso){
      rp.textContent = '正解です．おめでとう!';
      }
      else if(kotae > yoso){
        rp.textContent = 'まちがい．答えはもっと大きいですよ';
      }
      else if(kotae < yoso){
        rp.textContent = 'まちがい．答えはもっと小さいですよ';
      }
      else{
        rp.textContent = '正しく入力してください.'
      }
  }
  else if(kaisu === 3){
    
    if(kotae === yoso){
      rp.textContent ='正解です．おめでとう!';
      }
      else{
        rp.textContent = 'まちがい．残念でした答えは '+ kotae + ' です．';
      }
  }
  else if(kaisu > 3){
    
    rp.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
  }
  
}