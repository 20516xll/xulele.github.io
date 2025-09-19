//侧边栏菜单高亮切换
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

// 自动高亮当前页面的菜单项
document.querySelectorAll('#sidebar .side-menu li a').forEach(link => {
    if (link.href && window.location.pathname.endsWith(link.getAttribute('href'))) {
        // 先移除所有active
        document.querySelectorAll('#sidebar .side-menu li').forEach(li => li.classList.remove('active'));
        // 给当前li加active
        link.parentElement.classList.add('active');
    }
});

//侧边栏展开/收起
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// 响应式侧边栏显示/隐藏
function adjustSidebar() {
    if (window.innerWidth <= 576) {
        sidebar.classList.add('hide');  // 576px ve altı için sidebar gizli
        sidebar.classList.remove('show');
    } else {
        sidebar.classList.remove('hide');  // 576px'den büyükse sidebar görünür
        sidebar.classList.add('show');
    }
}

// 页面加载时和窗口大小改变时调整侧边栏状态
window.addEventListener('load', adjustSidebar);
window.addEventListener('resize', adjustSidebar);

// 搜索框按钮切换
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 768) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})

// 暗黑模式切换
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})

// Notification Menu Toggle
document.querySelector('.notification').addEventListener('click', function () {
    document.querySelector('.notification-menu').classList.toggle('show');
    document.querySelector('.profile-menu').classList.remove('show'); // Close profile menu if open
});

// Profile Menu Toggle
document.querySelector('.profile').addEventListener('click', function () {
    document.querySelector('.profile-menu').classList.toggle('show');
    document.querySelector('.notification-menu').classList.remove('show'); // Close notification menu if open
});



// Close menus if clicked outside
window.addEventListener('click', function (e) {
    // 1. 先获取元素（只查询1次，优化性能）
    const notificationMenu = document.querySelector('.notification-menu');
    const profileMenu = document.querySelector('.profile-menu');

    // 2. 仅当点击目标不在通知/个人头像内时，才执行关闭逻辑
    if (!e.target.closest('.notification') && !e.target.closest('.profile')) {
        // 3. 关键：判断元素存在后再操作
        if (notificationMenu) notificationMenu.classList.remove('show');
        if (profileMenu) profileMenu.classList.remove('show');
    }
});


// Menülerin açılıp kapanması için fonksiyon
    function toggleMenu(menuId) {
      var menu = document.getElementById(menuId);
      var allMenus = document.querySelectorAll('.menu');

      // Diğer tüm menüleri kapat
      allMenus.forEach(function(m) {
        if (m !== menu) {
          m.style.display = 'none';
        }
      });

      // Tıklanan menü varsa aç, yoksa kapat
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    }

    // Başlangıçta tüm menüleri kapalı tut
    document.addEventListener("DOMContentLoaded", function() {
      var allMenus = document.querySelectorAll('.menu');
      allMenus.forEach(function(menu) {
        menu.style.display = 'none';
      });
    });








// 等待DOM完全加载后再执行代码，避免找不到元素
document.addEventListener('DOMContentLoaded', function() {
    // -------- AI 聊天部分代码 ---------
    const API_URL = "https://jiutian.10086.cn/largemodel/api/v2/completions";
    // 注意：token有有效期，若过期请更换新token
    const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNjg2YjM5YmM0Yzc4YjA0ZTVhZGViMDUyIiwiZXhwIjoxNzU4MjU1NDUxLCJ0aW1lc3RhbXAiOjE3NTgxOTU0NTF9.RePTawx3Ju46pOiB6cG7BXhH4cly7uFUGeYa0j4OUWg";
    const APP_ID = "68cb7bee25659d60b3c74eda";
    let chatHistory = [];

    // 获取DOM元素并做存在性检查（核心优化点）
    const elements = {
        openBtn: document.getElementById('open-agent-dialog'),
        closeBtn: document.getElementById('close-agent-dialog'),
        dialog: document.getElementById('agent-dialog'),
        input: document.getElementById('chat-input'),
        chatBox: document.getElementById('chat-history'),
        sendBtn: document.getElementById('send-chat-btn')
    };

    // 检查必要元素是否存在，避免后续报错
    const missingElements = Object.entries(elements).filter(([_, el]) => !el).map(([name]) => name);
    if (missingElements.length > 0) {
        console.error('缺少必要的DOM元素，请检查ID是否正确：', missingElements);
        return; // 元素不全时终止执行
    }

    // 打开弹窗
    elements.openBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        elements.dialog.style.display = 'block';
    });

    // 关闭弹窗
    elements.closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        elements.dialog.style.display = 'none';
    });

    // 点击空白区域关闭弹窗
    document.addEventListener('click', function(e) {
        if (elements.dialog.style.display === 'block' && 
            !elements.dialog.contains(e.target) && 
            e.target !== elements.openBtn) {
            elements.dialog.style.display = 'none';
        }
    });

    // 发送消息主函数
    async function sendToAgent() {
        const userMsg = elements.input.value.trim();
        if (!userMsg) return;

        // 显示用户消息（使用textContent避免XSS风险）
        const userDiv = document.createElement('div');
        userDiv.style.textAlign = 'right';
        userDiv.style.color = '#333';
        userDiv.style.margin = '5px 0';
        userDiv.textContent = `我：${userMsg}`; // 用textContent替代innerHTML
        elements.chatBox.appendChild(userDiv);
        
        elements.input.value = '';
        elements.chatBox.scrollTop = elements.chatBox.scrollHeight;

        try {
            // 检查token是否有效（简单判断）
            if (!TOKEN || TOKEN.length < 10) {
                throw new Error("token无效，请更换最新token");
            }

            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + TOKEN
                },
                body: JSON.stringify({
                    prompt: userMsg,
                    history: chatHistory,
                    appId: APP_ID,
                    stream: false
                })
            });

            // 处理HTTP错误状态（4xx/5xx）
            if (!res.ok) {
                const errorText = await res.text().catch(() => '未知错误');
                throw new Error(`服务器错误: ${res.status} - ${errorText}`);
            }

            // 处理非JSON响应
            const contentType = res.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error("服务器返回非JSON格式数据");
            }

            const data = await res.json();
            const reply = data.result || data.message || "未获取到回复";

            // 显示AI回复
            const aiDiv = document.createElement('div');
            aiDiv.style.textAlign = 'left';
            aiDiv.style.color = '#1976d2';
            aiDiv.style.margin = '5px 0';
            aiDiv.textContent = `智能体：${reply}`;
            elements.chatBox.appendChild(aiDiv);
            
            elements.chatBox.scrollTop = elements.chatBox.scrollHeight;
            chatHistory.push({ question: userMsg, answer: reply });

        } catch (err) {
            // 显示错误信息
            const errorDiv = document.createElement('div');
            errorDiv.style.textAlign = 'left';
            errorDiv.style.color = 'red';
            errorDiv.style.margin = '5px 0';
            errorDiv.textContent = `系统错误：${err.message}`;
            elements.chatBox.appendChild(errorDiv);
            
            elements.chatBox.scrollTop = elements.chatBox.scrollHeight;
            console.error('发送消息失败：', err); // 控制台打印详细错误
        }
    }

    // 绑定发送按钮
    elements.sendBtn.addEventListener('click', sendToAgent);

    // 绑定Enter键发送
    elements.input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) { // 排除Shift+Enter（换行）
            e.preventDefault(); // 阻止默认换行行为
            sendToAgent();
        }
    });
});

