// 移动端菜单按钮 - 添加了缺失的按钮元素
const menuButton = document.createElement('button');
menuButton.className = 'md:hidden fixed top-4 right-4 bg-primary text-light p-2 rounded-md z-50';
menuButton.innerHTML = '<i class="fa fa-bars text-xl"></i>';
document.body.appendChild(menuButton);

// 移动端菜单切换
menuButton.addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // 关闭移动端菜单（如果打开）
        document.getElementById('mobile-menu').classList.add('hidden');
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (window.scrollY > 50) {
            section.classList.add('shadow-sm');
        } else {
            section.classList.remove('shadow-sm');
        }
    });
});

// 挑战卡片动画效果
const challengeCards = document.querySelectorAll('.card-hover');
challengeCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('shadow-xl');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('shadow-xl');
    });
});
