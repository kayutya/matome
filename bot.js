document.addEventListener('DOMContentLoaded', () => {
    const authBox = document.getElementById('authBox');
    const authText = document.getElementById('authText');
    const message = document.getElementById('message');

    const LOADING_TIME = 2000; // 2秒間ロード

    // 状態を初期に戻す関数
    function resetState() {
        authBox.className = 'ui-box'; // クラスを初期化
        authText.textContent = '私はロボットではありません';
        message.textContent = '';
    }

    // ローディングを開始する関数
    function startLoading() {
        if (authBox.classList.contains('loading') || authBox.classList.contains('failure')) return; 

        resetState();
        authBox.classList.add('loading'); // loadingクラス追加でスピナー開始
        authText.textContent = '認証中...';

        // 2秒後に必ず失敗処理を実行
        setTimeout(processResult, LOADING_TIME);
    }
    
    // 必ず失敗を返す関数
    function processResult() {
        
        authBox.classList.remove('loading');
        authBox.classList.add('failure'); // failureクラス追加でXマークと揺れ開始

        authText.textContent = '認証に失敗しました。';
        message.textContent = 'システムはあなたが人間ではないと判断しました。'; 
        
        // 3秒後にリセット
        setTimeout(resetState, 3000); 
    }

    // クリックイベント
    authBox.addEventListener('click', startLoading);

    // 初期状態に設定
    resetState();
})