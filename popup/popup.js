document.addEventListener('DOMContentLoaded', function() {
  // 获取DOM元素
  const shortcutDisplay = document.getElementById('shortcut-display');
  const changeShortcutBtn = document.getElementById('change-shortcut');
  const styleSelector = document.getElementById('style-selector');
  const previewCard = document.getElementById('preview-card');
  
  // 从存储中加载保存的设置
  chrome.storage.sync.get(['shortcut', 'cardStyle'], function(result) {
    // 加载快捷键
    if (result.shortcut) {
      shortcutDisplay.textContent = result.shortcut;
    }
    // 加载并应用卡片样式
    const savedStyle = result.cardStyle || 'default';
    const radioToCheck = styleSelector.querySelector(`input[value="${savedStyle}"]`);
    if (radioToCheck) {
      radioToCheck.checked = true;
    }
    updatePreviewCardStyle(savedStyle);
  });
  
  // 快捷键设置变量
  let isRecording = false;
  let keys = {
    ctrl: false,
    alt: false,
    shift: false,
    meta: false,
    key: ''
  };
  
  // 处理快捷键设置按钮点击
  changeShortcutBtn.addEventListener('click', function() {
    if (isRecording) {
      // 停止记录
      isRecording = false;
      changeShortcutBtn.textContent = "修改快捷键";
      changeShortcutBtn.classList.remove('recording');
    } else {
      // 开始记录
      isRecording = true;
      shortcutDisplay.textContent = "请按下快捷键...";
      changeShortcutBtn.textContent = "完成";
      changeShortcutBtn.classList.add('recording');
      
      // 重置按键状态
      keys = {
        ctrl: false,
        alt: false,
        shift: false,
        meta: false,
        key: ''
      };
    }
  });
  
  // 监听键盘事件 (用于设置快捷键)
  document.addEventListener('keydown', function(e) {
    if (!isRecording) return;
    
    // 阻止默认行为
    e.preventDefault();
    
    // 记录修饰键状态
    keys.ctrl = e.ctrlKey;
    keys.alt = e.altKey;
    keys.shift = e.shiftKey;
    keys.meta = e.metaKey;
    
    // 记录主键（如果不是修饰键）
    if (!['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) {
      keys.key = e.key.toUpperCase();
      
      // 生成快捷键字符串
      let shortcut = '';
      if (keys.ctrl) shortcut += 'Ctrl+';
      if (keys.alt) shortcut += 'Alt+';
      if (keys.shift) shortcut += 'Shift+';
      if (keys.meta) shortcut += 'Meta+';
      // 确保有主键才添加
      if (keys.key) {
        shortcut += keys.key;
      } else {
        // 如果只按了修饰键，则不完成设置
        shortcutDisplay.textContent = shortcut + "..."; // 提示用户继续按键
        return; 
      }
      
      // 更新显示并保存
      shortcutDisplay.textContent = shortcut;
      chrome.storage.sync.set({ shortcut: shortcut });
      
      // 结束录制
      isRecording = false;
      changeShortcutBtn.textContent = "修改快捷键";
      changeShortcutBtn.classList.remove('recording');
      
      // 向后台脚本发送消息以更新快捷键
      chrome.runtime.sendMessage({
        action: 'updateShortcut',
        shortcut: shortcut
      });
    }
  });

  // --- 卡片样式选择逻辑 ---
  styleSelector.addEventListener('change', function(e) {
    if (e.target.name === 'card-style') {
      const selectedStyle = e.target.value;
      updatePreviewCardStyle(selectedStyle);
      // 保存选择的样式
      chrome.storage.sync.set({ cardStyle: selectedStyle });
    }
  });

  // 更新预览卡片样式的函数
  function updatePreviewCardStyle(styleValue) {
    // 移除所有可能的样式类
    previewCard.classList.remove('share-card-style-default', 'share-card-style-dark', 'share-card-style-gradient', 'share-card-style-minimal');
    // 添加选中的样式类
    previewCard.classList.add(`share-card-style-${styleValue}`);
  }
});