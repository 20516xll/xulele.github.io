// 藏品数据
const collections = [
    {
        id: 1,
        name: "珐华绿釉双螭龙簋",
        price: 1420,
        image: "https://p26-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/4cee1dff36d04c78b30dc863a1f5da57.png~tplv-a9rns2rl98-24-95-exif:960:960.png?rcl=202509181216344D3D92B4324A8B617B74&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1758773794&x-signature=U4b8bXaxkW4O5tsl%2BgFuaZo8DFM%3D",
        images: [
            "https://p26-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/4cee1dff36d04c78b30dc863a1f5da57.png~tplv-a9rns2rl98-24-95-exif:960:960.png?rcl=202509181216344D3D92B4324A8B617B74&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1758773794&x-signature=U4b8bXaxkW4O5tsl%2BgFuaZo8DFM%3D",
            "https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/3f49f2bce0664a58ba2e593e40bfd929.png~tplv-a9rns2rl98-24:720:720.png?rk3s=1fb89129&x-expires=1758774890&x-signature=cqJEFjcO8rHTGb7yyiqZE9x2EPk%3D",
            "https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/6d8d52ff345b4a37b4e8599fecd5fccd.png~tplv-a9rns2rl98-24:720:720.png?rcl=2025091812374444DC3CB3607C798BF06A&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1758775065&x-signature=Nc%2F9iX5RCzC%2B%2BcjXESchP%2FCKQYg%3D"
        ],
        description: "本品为珐华绿釉双螭龙簋，造型典雅，釉色纯正，胎质细腻。器身装饰双螭龙纹，线条流畅自然，神态生动。整体工艺精湛，体现了古代陶瓷制作的高超技艺。",
        era: "明代",
        material: "陶瓷",
        size: "高18cm，口径22cm",
        craftsmanship: "珐华彩釉工艺"
    },
    {
        id: 2,
        name: "彩云龙纹兽首三足",
        price: 980,
        image: "https://p11-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/450380feb9bc4088853bd5d15eb5f980.png~tplv-a9rns2rl98-24:720:720.png?rcl=20250918122040038EA6C02AE580591C4B&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1758774040&x-signature=cjjWdFkX0tQpUbFTPyMFblCZ5Ho%3D",
        images: [
            "https://p11-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/450380feb9bc4088853bd5d15eb5f980.png~tplv-a9rns2rl98-24:720:720.png?rcl=20250918122040038EA6C02AE580591C4B&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1758774040&x-signature=cjjWdFkX0tQpUbFTPyMFblCZ5Ho%3D",
            "https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/340c2af3ad1f4173bd86b54446b53b49.png~tplv-a9rns2rl98-24:720:720.png?rcl=2025091812374444DC3CB3607C798BF06A&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1758775065&x-signature=JY2EGK%2Bl0d5uQmB%2B0drH1oPR6J8%3D",
            "https://p26-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/20972c0e4b714e5ab3f839375f47027b.png~tplv-a9rns2rl98-24:720:720.png?rcl=20250918124125DFC0D0AED184B3A7D4D0&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1758775286&x-signature=nl8Qd%2BVtfl8OlBB1ZR99cnUCnGs%3D",
            "https://p26-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/46c1dd0758604aa0be0b2eecf944811a.png~tplv-a9rns2rl98-24:720:720.png?rcl=20250918124125DFC0D0AED184B3A7D4D0&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1758775286&x-signature=RuFBhcWryfp1s5cR0wZZeyWzNnc%3D"
        ],
        description: "此件藏品为彩云龙纹兽首三足炉，器型庄重古朴，三足设计独特，采用兽首造型，栩栩如生。器身绘有云龙纹饰，色彩艳丽，层次分明，彰显皇家气派。",
        era: "清代",
        material: "陶瓷",
        size: "高21cm，口径15cm",
        craftsmanship: "彩绘瓷工艺"
    }
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化动画
    initAnimations();
    
    // 初始化打卡功能
    initCheckin();
    
    // 初始化个人资料功能
    initProfileFunctions();
    
    // 初始化藏品详情模态框功能
    initCollectionModal();
    
    // 初始化藏品卡片交互
    initCollectionCards();
    
    // 初始化功能按钮交互
    initFunctionButtons();
});

// 初始化元素进入动画
function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const scaleElements = document.querySelectorAll('.scale-in');
    
    // 初始显示第一个元素
    if (fadeElements.length > 0) {
        fadeElements[0].classList.add('appear');
        
        // 依次显示其他元素
        let delay = 100;
        for (let i = 1; i < fadeElements.length; i++) {
            setTimeout(() => {
                fadeElements[i].classList.add('appear');
            }, delay);
            delay += 150;
        }
    }
    
    // 当父元素出现后，显示缩放元素
    setTimeout(() => {
        scaleElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('appear');
            }, index * 150);
        });
    }, 300);
}

// 初始化打卡功能
function initCheckin() {
    const checkinBtn = document.getElementById('checkin-btn');
    const checkinSuccess = document.getElementById('checkin-success');
    const checkinCount = document.getElementById('checkin-count');
    let checkedIn = false;
    let currentCount = 31;
    
    checkinBtn.addEventListener('click', function() {
        if (!checkedIn) {
            // 打卡成功
            currentCount++;
            checkinCount.textContent = currentCount;
            checkinSuccess.classList.remove('hidden');
            checkinBtn.innerHTML = '<i class="fa fa-check mr-2"></i> 已打卡';
            checkinBtn.classList.remove('checkin-pulse', 'bg-primary', 'hover:bg-primary/90');
            checkinBtn.classList.add('bg-green-600', 'hover:bg-green-700');
            
            // 添加打卡成功动画
            checkinSuccess.classList.add('scale-in', 'appear');
            
            checkedIn = true;
            
            // 更新参观记录统计
            const statsVisited = document.getElementById('stats-visited');
            statsVisited.textContent = parseInt(statsVisited.textContent) + 1;
        }
    });
}

// 初始化个人资料功能
function initProfileFunctions() {
    // 获取DOM元素
    const avatarUpload = document.getElementById('avatar-upload');
    const profileAvatar = document.getElementById('profile-avatar');
    const profilePreview = document.getElementById('profile-preview');
    const profileUpload = document.getElementById('profile-upload');
    const imageUploadContainer = document.querySelector('.image-upload-container');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const profileModal = document.getElementById('profile-modal');
    const closeProfileModal = document.getElementById('close-profile-modal');
    const cancelProfile = document.getElementById('cancel-profile');
    const profileForm = document.getElementById('profile-form');
    const fullnameInput = document.getElementById('fullname');
    const titleInput = document.getElementById('title');
    const profileName = document.getElementById('profile-name');
    const profileTitle = document.getElementById('profile-title');
    
    // 头像上传功能
    function handleAvatarUpload(input, previewElement) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                previewElement.src = e.target.result;
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    // 点击头像区域触发上传
    imageUploadContainer.addEventListener('click', function() {
        avatarUpload.click();
    });
    
    // 头像上传变化事件
    avatarUpload.addEventListener('change', function() {
        handleAvatarUpload(this, profileAvatar);
        // 同时更新预览图
        handleAvatarUpload(this, profilePreview);
    });
    
    // 编辑资料中的头像上传
    profileUpload.addEventListener('change', function() {
        handleAvatarUpload(this, profilePreview);
    });
    
    // 打开个人资料编辑模态框
    editProfileBtn.addEventListener('click', function() {
        profileModal.classList.remove('opacity-0', 'pointer-events-none');
        profileModal.querySelector('div').classList.remove('scale-95');
        profileModal.querySelector('div').classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    });
    
    // 关闭个人资料编辑模态框
    function closeProfileModalFunc() {
        profileModal.classList.add('opacity-0', 'pointer-events-none');
        profileModal.querySelector('div').classList.remove('scale-100');
        profileModal.querySelector('div').classList.add('scale-95');
        document.body.style.overflow = '';
    }
    
    closeProfileModal.addEventListener('click', closeProfileModalFunc);
    cancelProfile.addEventListener('click', closeProfileModalFunc);
    
    // 点击模态框外部关闭
    profileModal.addEventListener('click', (e) => {
        if (e.target === profileModal) {
            closeProfileModalFunc();
        }
    });
    
    // 保存个人资料
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 更新显示的姓名和头衔
        profileName.textContent = fullnameInput.value;
        profileTitle.textContent = titleInput.value;
        
        // 更新头像
        profileAvatar.src = profilePreview.src;
        
        // 关闭模态框
        closeProfileModalFunc();
        
        // 显示保存成功提示
        showNotification('个人资料更新成功');
    });
}

// 初始化藏品详情模态框功能
function initCollectionModal() {
    // 获取DOM元素
    const modal = document.getElementById('collection-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    // 打开模态框
    function openModal(collectionId) {
        // 找到对应的藏品
        const collection = collections.find(item => item.id === collectionId);
        
        if (collection) {
            // 填充模态框内容
            modalContent.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 图片展示区 -->
                    <div>
                        <div class="rounded-lg overflow-hidden mb-4 bg-gray-100">
                            <img id="main-image" src="${collection.images[0]}" alt="${collection.name}" class="w-full h-auto object-contain">
                        </div>
                        <div class="grid grid-cols-4 gap-2">
                            ${collection.images.map((img, index) => `
                                <div class="rounded-md overflow-hidden cursor-pointer border-2 ${index === 0 ? 'border-primary' : 'border-transparent hover:border-primary/50'} transition-colors">
                                    <img src="${img}" alt="${collection.name} 细节图 ${index + 1}" class="w-full h-20 object-cover">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- 信息展示区 -->
                    <div>
                        <h2 class="text-2xl md:text-3xl font-kai font-bold text-primary mb-3">${collection.name}</h2>
                        
                        <div class="bg-primary/5 rounded-lg p-4 mb-6">
                            <p class="text-lg font-medium">年代：${collection.era}</p>
                            <p class="text-lg font-medium">材质：${collection.material}</p>
                            <p class="text-lg font-medium">尺寸：${collection.size}</p>
                            <p class="text-lg font-medium">工艺：${collection.craftsmanship}</p>
                        </div>
                        
                        <div class="mb-6">
                            <h3 class="text-xl font-bold text-dark mb-2">藏品介绍</h3>
                            <p class="text-gray-700 leading-relaxed">${collection.description}</p>
                        </div>
                        
                        <div class="flex items-center justify-between mt-8">
                            <div class="flex items-center text-2xl font-bold text-amber-600">
                                <i class="fa fa-coins mr-2"></i>
                                <span>${collection.price}</span>
                            </div>
                            
                            <div class="flex space-x-3">
                                <button class="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors duration-300 add-to-favorites">
                                    <i class="fa fa-heart-o mr-1"></i> 收藏
                                </button>
                                <button class="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300">
                                    <i class="fa fa-shopping-cart mr-1"></i> 购买
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // 添加图片切换功能
            const thumbnailImages = modalContent.querySelectorAll('.grid-cols-4 img');
            const mainImage = modalContent.getElementById('main-image');
            
            thumbnailImages.forEach((thumb, index) => {
                thumb.addEventListener('click', () => {
                    mainImage.src = thumb.src;
                    // 更新边框高亮
                    modalContent.querySelectorAll('.grid-cols-4 div').forEach((div, i) => {
                        if (i === index) {
                            div.classList.remove('border-transparent', 'hover:border-primary/50');
                            div.classList.add('border-primary');
                        } else {
                            div.classList.add('border-transparent', 'hover:border-primary/50');
                            div.classList.remove('border-primary');
                        }
                    });
                });
            });
            
            // 添加收藏功能
            modalContent.querySelector('.add-to-favorites').addEventListener('click', function() {
                this.innerHTML = '<i class="fa fa-heart mr-1"></i> 已收藏';
                this.classList.remove('bg-primary/10', 'hover:bg-primary/20', 'text-primary');
                this.classList.add('bg-red/10', 'hover:bg-red/20', 'text-red');
                
                // 更新收藏统计
                const statsFavorites = document.getElementById('stats-favorites');
                statsFavorites.textContent = parseInt(statsFavorites.textContent) + 1;
                
                showNotification('已添加到收藏');
            });
        }
        
        // 显示模态框并添加动画
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.querySelector('div').classList.remove('scale-95');
        modal.querySelector('div').classList.add('scale-100');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }

    // 关闭模态框
    function closeModalFunc() {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.querySelector('div').classList.remove('scale-100');
        modal.querySelector('div').classList.add('scale-95');
        document.body.style.overflow = ''; // 恢复背景滚动
    }

    // 为查看详情按钮添加点击事件
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const collectionId = parseInt(button.getAttribute('data-id'));
            openModal(collectionId);
        });
    });

    // 为关闭按钮添加点击事件
    closeModal.addEventListener('click', closeModalFunc);

    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
}

// 初始化藏品卡片交互
function initCollectionCards() {
    document.querySelectorAll('.collection-card-hover').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-xl');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-xl');
        });
    });
}

// 初始化功能按钮交互
function initFunctionButtons() {
    document.querySelectorAll('.bg-red, .bg-blue').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.add('scale-90');
            setTimeout(() => {
                this.classList.remove('scale-90');
            }, 200);
        });
    });
}

// 显示通知提示
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg transform translate-y-10 opacity-0 transition-all duration-300 z-50';
    notification.textContent = message;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示通知
    setTimeout(() => {
        notification.classList.remove('translate-y-10', 'opacity-0');
    }, 100);
    
    // 3秒后隐藏通知
    setTimeout(() => {
        notification.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 按ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const collectionModal = document.getElementById('collection-modal');
        const profileModal = document.getElementById('profile-modal');
        
        if (!collectionModal.classList.contains('opacity-0')) {
            collectionModal.classList.add('opacity-0', 'pointer-events-none');
            collectionModal.querySelector('div').classList.remove('scale-100');
            collectionModal.querySelector('div').classList.add('scale-95');
            document.body.style.overflow = '';
        }
        
        if (!profileModal.classList.contains('opacity-0')) {
            profileModal.classList.add('opacity-0', 'pointer-events-none');
            profileModal.querySelector('div').classList.remove('scale-100');
            profileModal.querySelector('div').classList.add('scale-95');
            document.body.style.overflow = '';
        }
    }
});
