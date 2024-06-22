// btnというidを持つHTML要素を取得し、定数に代入　//
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する　//
btn.addEventListener('click',() => {
    console.log('クリックされました！');
    // textというidを持つHTMLを取得し、定数に代入　//
    const textElement = document.getElementById('text');
    // 取得した要素のテキストを変更　//
    textElement.textContent = 'ボタンをクリックしました';
})

