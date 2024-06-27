const recentWorks = [
    {
        imgSrc: './assets/img/crane.png',
        title: 'クレーン制御実験装置',
        text: '大型産業機械の柔軟性を考慮した最適動作生成',
        url: 'crane.html'
    },
    {
        imgSrc: './assets/img/machining_tool.png',
        title: '５軸工作機械による省エネルギー制御法の実験検証',
        text: '工作機械・産業ロボットの省エネルギー動作生成',
        url: 'machining_tool.html'
    },
    {
        imgSrc: './assets/img/robot.png',
        title: '屋外清掃ロボット',
        text: '産業応用を指向した移動ロボットの設計制御',
        url: 'robot.html'
    },
    {
        imgSrc: './assets/img/excavator.png',
        title: 'ショベルによる堆積物の画像認識と自動搬送',
        text: '画像処理に基づく屋外産業機械の制御',
        url: 'excavator.html'
    },
    {
        imgSrc: './assets/img/manipulator.png',
        title: '産業ロボットの最適位置校正',
        text: '産業機械の最適動作校正',
        url: 'manipulator.html'
    },
    {
        imgSrc: './assets/img/nesting.png',
        title: '板金加工の加工レイアウト最適化',
        text: '',
        url: 'nesting.html'
    }
];

function loadRecentWorks() {
    const container = document.getElementById('recent-works-container');
    recentWorks.forEach(work => {
        const workDiv = document.createElement('div');
        workDiv.className = 'col-md-4 mb-3';
        workDiv.innerHTML = `
            <a href="${work.url}" class="recent-work card border-0 shadow-lg overflow-hidden">
                <img class="recent-work-img card-img" src="${work.imgSrc}" alt="Card image">
                <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
                    <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                        <h3 class="card-title">${work.title}</h3>
                        <p class="card-text">${work.text}</p>
                    </div>
                </div>
            </a>
        `;
        container.appendChild(workDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadRecentWorks);
