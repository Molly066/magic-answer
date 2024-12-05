const answers = [
    "放手去做吧", "三思而行", "你需要再想想", "是个好主意", "机会就在眼前",
    "顺其自然", "你已经知道答案了", "等待更好的时机", "勇敢一点", "现在不是时候",
    "相信你的直觉", "问问别人怎么看", "还有更多选择", "这是一次冒险", "再试一次",
    "接受现状", "继续前行", "需要一些改变", "可能会出问题", "看清自己的需求",
    "这是命运的安排", "坚持你的原则", "试试新的方法", "选择是你的", "平衡一下利弊",
    "听从内心的声音", "慢慢来会更好", "未来充满希望", "不要强求", "是时候行动了"
];

const answerBtn = document.getElementById('answerBtn');
const answerText = document.getElementById('answer');

// 添加点击事件
answerBtn.addEventListener('click', showAnswer);

function showAnswer() {
    // 禁用按钮防止重复点击
    answerBtn.disabled = true;
    
    // 移除现有的显示类
    answerText.classList.remove('show');
    
    // 随机选择一个答案
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    
    // 更新文本并添加显示类
    setTimeout(() => {
        answerText.textContent = randomAnswer;
        answerText.classList.add('show');
        
        // 启用按钮
        answerBtn.disabled = false;
    }, 300);
}

// 初始显示一个答案
showAnswer(); 