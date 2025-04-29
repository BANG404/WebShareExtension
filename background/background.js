// 监听快捷键命令
chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'create-share-image') {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'createShareImage' });
    }
  }
});

// 监听安装事件
chrome.runtime.onInstalled.addListener(() => {
  // 设置默认快捷键
  chrome.storage.sync.get(['shortcut'], function(result) {
    if (!result.shortcut) {
      chrome.storage.sync.set({ shortcut: 'Ctrl+Shift+S' });
    }
  });
});

// 监听来自popup或content script的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'updateShortcut') {
    // 通知所有打开的标签页更新快捷键
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, { 
          action: 'updateShortcut',
          shortcut: message.shortcut
        }).catch(() => {
          // 忽略错误，可能有些标签页无法接收消息
        });
      });
    });
    
    sendResponse({ success: true });
  } 
  // 获取当前标签页ID
  else if (message.action === 'getCurrentTabId') {
    sendResponse({ tabId: sender.tab.id });
  }
  // 注入html2canvas库
  else if (message.action === 'injectHtml2canvas') {
    const tabId = message.tabId;
    
    // 使用chrome.scripting API来注入本地html2canvas库
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['libs/html2canvas.min.js'],
    })
    .then(() => {
      console.log('html2canvas库注入成功到标签页', tabId);
      sendResponse({ success: true });
    })
    .catch(err => {
      console.error('注入html2canvas库失败:', err);
      sendResponse({ 
        success: false, 
        error: err.message || '未知错误' 
      });
    });
    
    // 必须返回true以保持sendResponse的有效性
    return true;
  }
  
  // 默认返回，允许同步响应
  return true;
});