// Função para enviar mensagem pelo Instagram
function sendInstagramMessage(serviceName) {
    const username = "opauloinvestigador"; // Substitua pelo seu @
    const message = `Olá, gostaria de contratar o serviço de ${serviceName}. Poderia me enviar mais informações?`;
    
    // URL para mobile (abre no app se instalado)
    const mobileUrl = `instagram://direct?username=${username}&text=${encodeURIComponent(message)}`;
    
    // URL para desktop/web
    const webUrl = `https://www.instagram.com/${username}/`;
    
    // Verifica se é um dispositivo móvel
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    if (isMobile) {
    // Tenta abrir o app
    window.location.href = mobileUrl;
    
    // Fallback para web se o app não abrir
    setTimeout(function() {
        if (!document.hidden) {
        window.location.href = webUrl;
        alert(`Por favor, envie a seguinte mensagem:\n\n"${message}"`);
        }
    }, 500);
    } else {
    // Para desktop, copia a mensagem e abre o Instagram
    copyToClipboard(message, `Mensagem copiada! Agora abra o Instagram e cole na conversa com @${username}`, `Copie esta mensagem para o Instagram:\n\n"${message}"`);
    window.open(webUrl, '_blank');
    }
}

// Função para copiar texto para a área de transferência
function copyToClipboard(text, successMsg, fallbackMsg) {
    if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
        alert(successMsg);
    }, function() {
        prompt(fallbackMsg, text);
    });
    } else {
    prompt(fallbackMsg, text);
    }
}

// Função unificada para contato
function contactViaInstagram(serviceName) {
    sendInstagramMessage(serviceName);
}

// Menu mobile (opcional)
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    // Implemente o menu mobile se necessário
    alert('Menu mobile - implemente conforme necessário');
});