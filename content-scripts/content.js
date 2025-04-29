// CSS 样式规则定义
const cardStylesCSS = `
  .share-card {
    width: 500px; /* Keep width consistent */
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 24px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    box-sizing: border-box; /* Ensure padding is included in width */
  }
  .share-card * { box-sizing: border-box; }

  .share-card .quote-section {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    min-height: 24px; /* 确保引用区域有最小高度 */
  }
  .share-card .quote-icon {
    font-size: 24px;
    line-height: 1.2;
    flex-shrink: 0;
    margin-top: 4px;
  }
  .share-card .quote-text {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
  }
  .share-card .context-text {
    font-size: 14px;
    margin: 0 0 16px 36px; /* Align with quote text */
    line-height: 1.4;
    opacity: 0.8;
  }
  .share-card .divider {
    height: 1px;
    margin: 16px 0;
  }
  .share-card .website-info {
    display: flex;
    align-items: center; /* 保持垂直居中 */
    gap: 12px;
    width: 100%;
    min-height: 36px;
  }
  .share-card .website-icon-wrapper {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f1f3f4;
    /* 移除 margin-right，使用 gap 控制间距 */
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .share-card .website-icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block; /* Remove extra space below img */
  }
  .share-card .website-details {
    /* 移除 width 计算，让 flex 自动处理 */
    /* overflow: hidden; */ /* 移除 overflow */
    display: flex;
    flex-direction: column;
    justify-content: center; /* 保持垂直居中 */
    min-height: 32px;
    flex-grow: 1; /* 让 details 区域占据剩余空间 */
    min-width: 0; /* 添加 min-width: 0 允许 flex item 收缩 */
  }
  .share-card .website-title {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis; /* 取消注释 */
    line-height: 1.4; /* 调整行高 */
    /* 移除 padding-bottom */
  }
  .share-card .website-url {
    font-size: 12px;
    margin: 0;
    white-space: nowrap;
    /* overflow: hidden; */ /* 移除 overflow */
    /* text-overflow: ellipsis; */ /* 移除 text-overflow */
    opacity: 0.7;
    line-height: 1.4; /* 调整行高 */
  }

  /* Default Style */
  .share-card-style-default {
    background-color: white;
    color: #333;
  }
  .share-card-style-default .quote-icon { color: #d0d0d0; }
  .share-card-style-default .quote-text { color: #3c4043; }
  .share-card-style-default .context-text { color: #70757a; }
  .share-card-style-default .divider { background-color: #f1f3f4; }
  .share-card-style-default .website-icon-wrapper { background-color: #f1f3f4; }
  .share-card-style-default .website-title { color: #3c4043; }
  .share-card-style-default .website-url { color: #70757a; }

  /* Dark Style */
  .share-card-style-dark {
    background-color: #2c2c2e;
    color: #e5e5e7;
  }
  .share-card-style-dark .quote-icon { color: #6c6c70; }
  .share-card-style-dark .quote-text { color: #f2f2f7; }
  .share-card-style-dark .context-text { color: #a0a0a5; }
  .share-card-style-dark .divider { background-color: #48484a; }
  .share-card-style-dark .website-icon-wrapper { background-color: #48484a; }
  .share-card-style-dark .website-title { color: #f2f2f7; }
  .share-card-style-dark .website-url { color: #a0a0a5; }

  /* Gradient Style */
  .share-card-style-gradient {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    color: #4a2e00;
  }
  .share-card-style-gradient .quote-icon { color: #f5a623; }
  .share-card-style-gradient .quote-text { color: #5d3a00; }
  .share-card-style-gradient .context-text { color: #8c5a00; opacity: 0.9; }
  .share-card-style-gradient .divider { background-color: rgba(255, 255, 255, 0.3); }
  .share-card-style-gradient .website-icon-wrapper { background-color: rgba(255, 255, 255, 0.3); }
  .share-card-style-gradient .website-title { color: #5d3a00; }
  .share-card-style-gradient .website-url { color: #8c5a00; opacity: 0.8; }

  /* Minimal Style */
  .share-card-style-minimal {
    background-color: #f8f8f8;
    color: #444;
    border: 1px solid #e0e0e0;
    box-shadow: none;
  }
  .share-card-style-minimal .quote-icon { color: #b0b0b0; }
  .share-card-style-minimal .quote-text { color: #222; font-size: 17px; }
  .share-card-style-minimal .context-text { color: #666; font-size: 13px; }
  .share-card-style-minimal .divider { background-color: #e8e8e8; }
  .share-card-style-minimal .website-icon-wrapper { border-radius: 4px; background-color: #e8e8e8; }
  .share-card-style-minimal .website-title { color: #333; }
  .share-card-style-minimal .website-url { color: #777; }

  /* 没有上下文时的空白占位符样式 */
  .share-card .empty-context-spacer {
    margin: 0 0 12px 36px; /* 与context-text保持一致的左边距，但高度略小 */
  }
`;

// 函数：注入CSS样式到页面
function injectStyles(cssRules) {
  const styleElementId = 'web-share-card-styles';
  if (document.getElementById(styleElementId)) {
    // Styles already injected
    return;
  }
  const style = document.createElement('style');
  style.id = styleElementId;
  style.textContent = cssRules;
  (document.head || document.documentElement).appendChild(style);
  console.log('[Web Share] Card styles injected.');
}

// 注入样式（在脚本加载时执行一次）
injectStyles(cardStylesCSS);

// 监听来自后台脚本的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    if (message.action === 'createShareImage') {
      handleCreateShareImage();
      sendResponse({ success: true });
    }
  } catch (error) {
    console.error('[Web Share] 处理消息时出错:', error);
  }
  return true;
});

// 监听快捷键
document.addEventListener('keydown', (e) => {
  try {
    // 加载保存的快捷键
    chrome.storage.sync.get(['shortcut'], function(result) {
      try {
        const savedShortcut = result.shortcut || 'Ctrl+Shift+S';
        // 解析快捷键
        const keys = savedShortcut.split('+');
        const needCtrl = keys.includes('Ctrl');
        const needAlt = keys.includes('Alt');
        const needShift = keys.includes('Shift');
        const needMeta = keys.includes('Meta');
        const mainKey = keys[keys.length - 1];
        
        // 检查是否匹配当前按下的键
        if (
          (!needCtrl || e.ctrlKey) &&
          (!needAlt || e.altKey) &&
          (!needShift || e.shiftKey) &&
          (!needMeta || e.metaKey) &&
          e.key.toUpperCase() === mainKey
        ) {
          e.preventDefault();
          handleCreateShareImage();
        }
      } catch (err) {
        // 忽略存储错误
        console.error('[Web Share] 读取快捷键设置时出错:', err);
      }
    });
  } catch (error) {
    // 处理扩展上下文无效错误
    console.error('[Web Share] 检查快捷键时出错:', error);
  }
});

// 处理创建分享图片的逻辑
async function handleCreateShareImage() {
  // 获取选中的文本
  const selection = window.getSelection();
  const selectedText = selection.toString().trim();
  console.log('[Web Share] 选中文本:', selectedText.substring(0, 50) + (selectedText.length > 50 ? '...' : ''));
  
  if (!selectedText) {
    showNotification('请先选择要分享的文本');
    return;
  }
  
  try {
    // 检查html2canvas库是否已加载
    if (!window.html2canvas) {
      console.log('[Web Share] html2canvas库尚未加载，尝试加载本地库...');

      try {
        // 使用chrome.scripting API执行脚本
        // 注意：这需要在manifest.json中添加"scripting"权限
        const tabId = await new Promise(resolve => {
          chrome.runtime.sendMessage({ action: 'getCurrentTabId' }, response => {
            resolve(response.tabId);
          });
        });
        
        console.log('[Web Share] 正在当前标签页注入html2canvas库, tabId:', tabId);
        
        // 请求background脚本执行注入
        await new Promise((resolve, reject) => {
          chrome.runtime.sendMessage(
            { 
              action: 'injectHtml2canvas',
              tabId: tabId
            }, 
            response => {
              if (response && response.success) {
                console.log('[Web Share] html2canvas库注入成功');
                resolve();
              } else {
                console.error('[Web Share] html2canvas库注入失败:', response ? response.error : '未知错误');
                reject(new Error('无法注入html2canvas库: ' + (response ? response.error : '未知错误')));
              }
            }
          );
        });
        
        // 等待库加载完成
        console.log('[Web Share] 等待html2canvas库初始化...');
        await new Promise((resolve, reject) => {
          let attempts = 0;
          const maxAttempts = 50; // 5秒超时
          
          const checkHtml2Canvas = setInterval(() => {
            attempts++;
            
            if (typeof window.html2canvas === 'function') {
              clearInterval(checkHtml2Canvas);
              console.log('[Web Share] html2canvas已可用');
              resolve();
            } else if (attempts >= maxAttempts) {
              clearInterval(checkHtml2Canvas);
              reject(new Error('等待html2canvas初始化超时'));
            }
          }, 100);
        });
        
      } catch (error) {
        console.error('[Web Share] 加载html2canvas库失败:', error);
        throw error;
      }
      
      // 最终检查
      if (typeof window.html2canvas !== 'function') {
        throw new Error('html2canvas库加载后未正确初始化');
      }
      
      console.log('[Web Share] html2canvas库已成功加载并初始化');
    }

    // 获取选中的卡片样式
    const { cardStyle } = await new Promise(resolve => {
      chrome.storage.sync.get(['cardStyle'], result => {
        resolve({ cardStyle: result.cardStyle || 'default' });
      });
    });
    console.log(`[Web Share] Using card style: ${cardStyle}`);

    // 获取选中文本的上下文
    console.log('[Web Share] 正在提取文本上下文...');
    const contextText = getTextContext(selection);
    
    // 获取网站信息
    console.log('[Web Share] 正在获取网站信息...');
    const websiteTitle = document.title;
    const websiteUrl = window.location.href;
    const websiteIconUrl = getFavicon();
    console.log('[Web Share] 网站信息:', { 
      title: websiteTitle,
      url: websiteUrl.substring(0, 50) + (websiteUrl.length > 50 ? '...' : ''),
      iconUrl: websiteIconUrl
    });
    
    // 创建分享卡片 (传入样式)
    console.log('[Web Share] 正在创建分享卡片DOM...');
    const shareCard = createShareCard(selectedText, contextText, websiteTitle, websiteUrl, websiteIconUrl, cardStyle);
    
    // 转换为图片并复制到剪贴板
    console.log('[Web Share] 正在将DOM转换为图片并复制到剪贴板...');
    // Pass cardStyle to shareCardToClipboard
    await shareCardToClipboard(shareCard, cardStyle);
    
    showNotification('分享图片已复制到剪贴板');
  } catch (error) {
    console.error('[Web Share] 创建分享图片失败:', error);
    // 提供更具体的错误信息
    let errorMessage = '创建分享图片失败';
    if (error.message.includes('html2canvas')) {
      errorMessage += ': 无法加载图像转换库';
    } else if (error.message.includes('clipboard')) {
      errorMessage += ': 剪贴板访问受限';
    } else if (error.message.includes('permission')) {
      errorMessage += ': 权限不足';
    } else if (error.message.includes('SecurityError')) {
      errorMessage += ': 安全限制';
    } else if (error.stack) {
      // 提取错误位置
      const errorLocation = error.stack.split('\n')[1];
      if (errorLocation) {
        errorMessage += ': ' + errorLocation.trim();
      }
    }
    showNotification(errorMessage);
  }
}

// 获取选中文本的上下文
function getTextContext(selection) {
  if (!selection.rangeCount) return '';

  const range = selection.getRangeAt(0);
  let currentNode = range.commonAncestorContainer;

  // 如果公共祖先是文本节点，从其父元素开始遍历
  if (currentNode.nodeType === Node.TEXT_NODE) {
    currentNode = currentNode.parentNode;
  }

  // 向上遍历，必要时跨越 Shadow DOM 边界
  while (currentNode) {
    // 检查当前节点是否是目标容器类型
    if (currentNode.nodeType === Node.ELEMENT_NODE && ['P', 'DIV', 'ARTICLE', 'SECTION'].includes(currentNode.nodeName)) {
      // 找到合适的容器，提取并处理其文本
      let contextText = currentNode.textContent.trim();

      // 如果上下文太长，进行截断 (保持原有逻辑)
      if (contextText.length > 200) {
        const selectedText = selection.toString();
        const selectedTextPos = contextText.indexOf(selectedText);
        // 仅当在上下文中找到选定文本时才进行智能截断
        if (selectedTextPos !== -1) {
            const startPos = Math.max(0, selectedTextPos - 50);
            const endPos = Math.min(contextText.length, selectedTextPos + selectedText.length + 50);
            contextText = (startPos > 0 ? '...' : '') +
                         contextText.substring(startPos, endPos) +
                         (endPos < contextText.length ? '...' : '');
        } else {
            // 如果找不到（例如，由于规范化），则从两端截断
             contextText = contextText.substring(0, 100) + '...' + contextText.substring(contextText.length - 100);
        }
      }
      return contextText.trim();
    }

    // 检查是否需要跨越 Shadow Boundary
    const parent = currentNode.parentNode;
    // ShadowRoot 的 nodeType 是 DOCUMENT_FRAGMENT_NODE (11)，并且有 host 属性
    if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE && parent.host) {
      // 父节点是 ShadowRoot，移动到宿主元素
      console.log('[Web Share] Crossing Shadow Boundary from:', currentNode, 'to host:', parent.host);
      currentNode = parent.host;
    } else {
      // 否则，继续正常的向上遍历
      currentNode = parent;
    }
  }

  // 如果遍历到顶部仍未找到合适的容器
  console.log('[Web Share] Could not find suitable context container.');
  return '';
}

// 获取网站图标URL
function getFavicon() {
  // 尝试查找标准favicon链接
  const iconLink = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
  if (iconLink) {
    return new URL(iconLink.href, window.location.href).href;
  }
  
  // 使用默认favicon位置
  return new URL('/favicon.ico', window.location.origin).href;
}

// 创建分享卡片DOM结构 (接受 styleValue 参数)
function createShareCard(selectedText, contextText, websiteTitle, websiteUrl, websiteIconUrl, styleValue) {
  // 创建卡片容器
  const card = document.createElement('div');
  // 应用基础类和样式特定的类
  card.classList.add('share-card', `share-card-style-${styleValue}`);
  
  // 智能截断长文本
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  };
  
  // 为不同部分设置更合理的字数限制
  const truncatedSelectedText = truncateText(selectedText, 300);
  const truncatedContextText = contextText ? truncateText(contextText, 150) : '';
  
  // 为网址和标题设置合适的字符限制，避免依赖 CSS 处理溢出
  const domainMatch = websiteUrl.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/i);
  const domain = domainMatch ? domainMatch[1] : '';
  // 对较长的URL采用更智能的截断方式
  let truncatedWebsiteUrl;
  if (websiteUrl.length > 40) {
    const urlPath = websiteUrl.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/i, '');
    truncatedWebsiteUrl = domain + (urlPath.length > 15 ? truncateText(urlPath, 15) : urlPath);
  } else {
    truncatedWebsiteUrl = websiteUrl;
  }
  
  // 根据卡片宽度动态调整标题长度
  const titleMaxLength = window.innerWidth < 500 ? 25 : 35;
  const truncatedWebsiteTitle = truncateText(websiteTitle, titleMaxLength);
  
  // 设置卡片HTML内容 (优化排版和行高设置)
  card.innerHTML = `
    <div class="quote-section">
      <div class="quote-icon">❝</div>
      <p class="quote-text">${truncatedSelectedText}</p>
    </div>
    
    ${truncatedContextText ? `<p class="context-text">${truncatedContextText}</p>` : 
      `<div class="empty-context-spacer"></div>`}

    <div class="divider"></div>
    
    <div class="website-info">
      <div class="website-icon-wrapper">
        <img src="${websiteIconUrl}" class="website-icon" onerror="this.style.display='none'" alt="Website Icon">
      </div>
      <div class="website-details">
        <p class="website-title">${truncatedWebsiteTitle}</p>
        <p class="website-url">${truncatedWebsiteUrl}</p>
      </div>
    </div>
  `;
  
  return card;
}

// 将分享卡片转换为图片并复制到剪贴板
// Add styleValue parameter
async function shareCardToClipboard(cardElement, styleValue) {
  try {
    // 将卡片添加到页面上（临时的，稍后会移除）
    cardElement.style.position = 'fixed';
    cardElement.style.top = '-9999px';
    cardElement.style.left = '-9999px';
    document.body.appendChild(cardElement);
    console.log('[Web Share] 临时DOM已添加到页面');

    // --- 新增：等待图片加载 ---
    const images = cardElement.getElementsByTagName('img');
    const imageLoadPromises = [];
    for (let img of images) {
      if (!img.complete) { // 只处理未加载完成的图片
        console.log(`[Web Share] 等待图片加载: ${img.src.substring(0, 100)}...`);
        imageLoadPromises.push(new Promise((resolve, reject) => {
          img.onload = resolve;
          // 添加错误处理，即使图片加载失败也继续，避免阻塞
          img.onerror = () => {
            console.warn(`[Web Share] 图片加载失败: ${img.src.substring(0, 100)}...`);
            resolve(); // 仍然 resolve，让流程继续
          };
          // 添加超时
          setTimeout(() => {
             console.warn(`[Web Share] 图片加载超时: ${img.src.substring(0, 100)}...`); 
             resolve(); // 超时也继续
          }, 5000); // 5秒超时
        }));
      }
    }
    if (imageLoadPromises.length > 0) {
      console.log(`[Web Share] 正在等待 ${imageLoadPromises.length} 张图片加载...`);
      await Promise.all(imageLoadPromises);
      console.log('[Web Share] 所有图片加载完成或超时。');
      // 短暂延迟，确保浏览器完成图片渲染
      await new Promise(resolve => setTimeout(resolve, 100)); 
    }
    // --- 图片加载等待结束 ---

    // --- Explicitly set fallback color ---
    // Explicitly set text color to avoid unsupported color functions like oklch
    let fallbackColor = '#000000'; // Default fallback
    if (styleValue === 'dark') {
        fallbackColor = '#e5e5e7'; // Color from dark theme
    } else if (styleValue === 'gradient') {
        fallbackColor = '#4a2e00'; // Color from gradient theme
    } else { // default, minimal
        fallbackColor = '#3c4043'; // Color from default theme
    }
    console.log(`[Web Share] Setting fallback color: ${fallbackColor} for style ${styleValue}`);
    cardElement.style.color = fallbackColor;
    // --- End of fallback color setting ---
    
    // 直接将html2canvas库注入页面主环境
    console.log('[Web Share] 尝试直接注入html2canvas库到页面...');
    
    // 创建一个等待库加载的Promise
    await new Promise((resolve, reject) => {
      // 检查库是否已存在于页面的主环境中
      if (typeof window.html2canvas === 'function') {
        console.log('[Web Share] html2canvas库已在页面中可用');
        return resolve();
      }
      
      // 创建脚本元素
      const script = document.createElement('script');
      
      // 设置onload和onerror处理
      script.onload = () => {
        console.log('[Web Share] html2canvas库已成功注入页面');
        
        // 确保库已加载
        if (typeof window.html2canvas !== 'function') {
          // 尝试创建一个全局引用
          const checkLoaded = setInterval(() => {
            if (typeof window.html2canvas === 'function') {
              clearInterval(checkLoaded);
              console.log('[Web Share] html2canvas全局函数已可用');
              resolve();
            }
          }, 100);
          
          // 10秒后超时
          setTimeout(() => {
            clearInterval(checkLoaded);
            if (typeof window.html2canvas !== 'function') {
              reject(new Error('html2canvas库加载超时'));
            }
          }, 10000);
        } else {
          resolve();
        }
      };
      
      script.onerror = () => reject(new Error('无法加载html2canvas库'));
      
      // 首先尝试使用扩展内的本地文件
      try {
        script.src = chrome.runtime.getURL('libs/html2canvas.min.js');
      } catch (err) {
        // 备用: 使用CDN
        script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
      }
      
      // 添加到文档
      document.head.appendChild(script);
    });
    
    // 检查html2canvas是否可用
    if (typeof window.html2canvas !== 'function') {
      throw new Error('html2canvas函数不可用，尽管脚本已加载');
    }
    
    console.log('[Web Share] 开始转换DOM为Canvas...');
    
    // 直接使用window.html2canvas确保我们使用的是主窗口环境中的函数
    const canvas = await window.html2canvas(cardElement, {
      allowTaint: true,
      useCORS: true,
      backgroundColor: null, // 保持透明背景
      scale: 2, // 高清输出
      logging: true, // 开启html2canvas日志
      scrollY: -window.scrollY, // 尝试修正滚动位置影响
      windowWidth: document.documentElement.scrollWidth, // 尝试提供完整宽度
      windowHeight: document.documentElement.scrollHeight, // 尝试提供完整高度
      onclone: (documentClone) => {
        console.log('[Web Share] 文档已克隆用于渲染');
        // 移除所有外部样式和样式元素，只保留卡片样式
        const head = documentClone.querySelector('head');
        // 新增: 移除所有脚本元素
        head.querySelectorAll('script').forEach(el => el.remove());
        head.querySelectorAll('link[rel="stylesheet"], style').forEach(el => {
          if (el.id !== 'web-share-card-styles') el.remove();
        });
        // 确保注入卡片样式
        const style = documentClone.getElementById('web-share-card-styles');
        if (!style) {
          const newStyle = documentClone.createElement('style');
          newStyle.id = 'web-share-card-styles';
          newStyle.textContent = cardStylesCSS;
          head.appendChild(newStyle);
        }
        // 覆盖克隆元素及其子元素的颜色
        const clonedCard = documentClone.querySelector('.share-card');
        if (clonedCard) {
            clonedCard.style.color = fallbackColor;
            clonedCard.querySelectorAll('*').forEach(el => {
              el.style.color = fallbackColor;
            });
        }
        return documentClone;
      }
    });
    
    console.log('[Web Share] DOM已成功转换为Canvas');
    
    // 移除临时DOM
    document.body.removeChild(cardElement);
    
    // 将Canvas转换为Blob
    console.log('[Web Share] 正在将Canvas转换为Blob...');
    const blob = await new Promise((resolve, reject) => {
      try {
        canvas.toBlob(blob => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Canvas转换为Blob失败'));
          }
        }, 'image/png');
      } catch (err) {
        reject(err);
      }
    });
    console.log('[Web Share] Canvas已成功转换为Blob, 大小: ' + (blob.size / 1024).toFixed(2) + 'KB');
    
    // 复制到剪贴板
    await copyBlobToClipboard(blob);
  } catch (error) {
    console.error('[Web Share] 在shareCardToClipboard函数中出错:', error);
    throw error; // 重新抛出错误以便上层函数处理
  }
}

// 将Blob复制到剪贴板
async function copyBlobToClipboard(blob) {
  try {
    // 检查剪贴板API是否可用
    if (!navigator.clipboard) {
      throw new Error('浏览器不支持剪贴板API');
    }
    
    if (!navigator.clipboard.write) {
      throw new Error('浏览器不支持剪贴板写入图片');
    }
    
    console.log('[Web Share] 尝试使用Clipboard API复制图片...');
    // 现代浏览器API
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ]);
    console.log('[Web Share] 图片已成功复制到剪贴板');
  } catch (err) {
    console.error('[Web Share] 剪贴板API不可用，错误详情:', err);
    
    // 尝试提供更多关于错误的信息
    let errorInfo = '';
    if (err.name === 'NotAllowedError') {
      errorInfo = '权限被拒绝，请确保站点有剪贴板写入权限';
    } else if (err.name === 'SecurityError') {
      errorInfo = '安全限制，只有在安全上下文(HTTPS)中才能使用剪贴板';
    }
    console.warn('[Web Share] ' + (errorInfo || '使用备用下载方法'));
    
    // 备用方法：创建一个下载链接
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'share-card.png';
    link.click();
    
    console.log('[Web Share] 已创建图片下载链接');
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    throw new Error('无法直接复制到剪贴板' + (errorInfo ? ': ' + errorInfo : '') + '，已创建下载链接');
  }
}

// 显示通知
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.bottom = '24px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  notification.style.color = 'white';
  notification.style.padding = '8px 16px';
  notification.style.borderRadius = '4px';
  notification.style.fontSize = '14px';
  notification.style.zIndex = '999999';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    setTimeout(() => document.body.removeChild(notification), 300);
  }, 3000);
}

// 添加一个辅助函数，用于在页面主环境中执行脚本
function injectScript(code) {
  return new Promise((resolve, reject) => {
    try {
      // 创建一个脚本元素
      const script = document.createElement('script');
      
      // 添加执行完成的回调
      script.onload = () => {
        resolve();
        // 执行完成后移除脚本元素
        script.remove();
      };
      
      script.onerror = (error) => {
        reject(new Error(`脚本执行错误: ${error}`));
        script.remove();
      };
      
      // 设置脚本内容
      script.textContent = code;
      
      // 添加到页面
      (document.head || document.documentElement).appendChild(script);
    } catch (err) {
      reject(err);
    }
  });
}