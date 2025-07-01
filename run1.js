

// run.js

(function() {
    if (sessionStorage.getItem('waPopupShown')) return;

    // CSS
    const style = document.createElement('style');
    style.textContent = `#wa-overlay {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.8);backdrop-filter: blur(8px);display: none;justify-content: center;align-items: center;z-index: 9999;opacity: 0;visibility: hidden;transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);font-family: -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;}#wa-overlay.wa-show {opacity: 1;visibility: visible;}#wa-popup {background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);color: white;padding: 32px 28px;border-radius: 24px;box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 8px 20px rgba(37, 211, 102, 0.3);max-width: 90%;width: 380px;text-align: center;position: relative;transform: scale(0.8) translateY(20px);transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);border: 1px solid rgba(255, 255, 255, 0.2);}#wa-overlay.wa-show #wa-popup {transform: scale(1) translateY(0);}.wa-close-btn {position: absolute;top: 12px;right: 12px;background: rgba(255, 255, 255, 0.2);border: none;color: white;width: 32px;height: 32px;border-radius: 50%;cursor: pointer;display: flex;align-items: center;justify-content: center;font-size: 18px;transition: all 0.2s ease;backdrop-filter: blur(4px);}.wa-close-btn:hover {background: rgba(255, 255, 255, 0.3);transform: scale(1.1);}.wa-icon {width: 64px;height: 64px;margin: 0 auto 20px;background: rgba(255, 255, 255, 0.2);border-radius: 50%;display: flex;align-items: center;justify-content: center;font-size: 32px;backdrop-filter: blur(4px);animation: wa-pulse 2s infinite;}@keyframes wa-pulse {0%, 100% {transform: scale(1);}50% {transform: scale(1.05);}}.wa-title {font-weight: 700;font-size: 24px;margin-bottom: 8px;background: linear-gradient(45deg, #ffffff, #f0f9ff);-webkit-background-clip: text;-webkit-text-fill-color: transparent;background-clip: text;}.wa-subtitle {font-size: 16px;opacity: 0.9;margin-bottom: 24px;line-height: 1.5;}.wa-button-group {display: flex;gap: 12px;justify-content: center;}.wa-btn {padding: 14px 24px;border-radius: 12px;text-decoration: none;font-weight: 600;font-size: 16px;flex: 1;text-align: center;cursor: pointer;border: none;transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);position: relative;overflow: hidden;font-family: inherit;}.wa-btn::before {content: &#39;&#39;;position: absolute;top: 0;left: -100%;width: 100%;height: 100%;background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);transition: left 0.5s;}.wa-btn:hover::before {left: 100%;}.wa-btn-primary {background: rgba(255, 255, 255, 0.95);color: #25D366;backdrop-filter: blur(8px);box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);}.wa-btn-primary:hover {background: white;transform: translateY(-2px);box-shadow: 0 8px 20px rgba(255, 255, 255, 0.4);}.wa-btn-secondary {background: rgba(255, 255, 255, 0.15);color: white;border: 1px solid rgba(255, 255, 255, 0.3);backdrop-filter: blur(4px);}.wa-btn-secondary:hover {background: rgba(255, 255, 255, 0.25);transform: translateY(-2px);box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);}.wa-content {animation: wa-slideInUp 0.6s ease-out 0.2s both;}@keyframes wa-slideInUp {from {opacity: 0;transform: translateY(30px);}to {opacity: 1;transform: translateY(0);}}@media (max-width: 480px) {#wa-popup {width: 340px;padding: 28px 24px;margin: 20px;}.wa-button-group {flex-direction: column;}.wa-title {font-size: 22px;}}
`;
    document.head.appendChild(style);

    // HTML
    const html = `
    <div id="wa-popup">
        <button class="wa-close-btn" onclick="closeWAPopup()">×</button>
        <div class="wa-icon">📱</div>
        <div class="wa-content">
            <div class="wa-title">Join Our WhatsApp Channel!</div>
            <p class="wa-subtitle">Get live sports links and exclusive updates first &#8211; join our WhatsApp channel today!.</p>
            <div class="wa-button-group">
                <a id="wa-join-btn" class="wa-btn wa-btn-primary" target="_blank" onclick="trackJoin()">🚀 Join Now</a>
                <button class="wa-btn wa-btn-secondary" onclick="closeWAPopup()">Maybe Later</button>
            </div>
        </div>
    </div>`;
    
    const overlay = document.getElementById('wa-overlay');
    overlay.innerHTML = html;

    // WhatsApp link
    document.getElementById('wa-join-btn').href = "https://chat.whatsapp.com/Kh9zXkPhmOEIIgKXsPV24k";

    // Show overlay
    setTimeout(() => {
        overlay.style.display = 'flex';
        overlay.classList.add('wa-show');
    }, 1000);

    // Close logic
    window.closeWAPopup = function() {
        overlay.classList.remove('wa-show');
        sessionStorage.setItem('waPopupShown', 'true');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    };

    window.trackJoin = function() {
        console.log('User clicked Join WhatsApp Channel');
        closeWAPopup();
    };

    // Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeWAPopup();
        }
    });

    // Click outside
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeWAPopup();
        }
    });
})();
