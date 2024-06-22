// btn idを取得、定数に代入
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    console.log('ボタンをクリックしました');
    // 2秒後に実行する処理
    setTimeout(() => {
        const textElement = document.getElementById('text');
        textElement.textContent = 'ボタンをクリックしました';
    },2000);
   
})