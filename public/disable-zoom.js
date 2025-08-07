// Desabilitar zoom completamente
document.addEventListener('DOMContentLoaded', function() {
  // Prevenir zoom com gestos
  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('gesturechange', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('gestureend', function(e) {
    e.preventDefault();
  });
  
  // Prevenir zoom com teclado
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '0')) {
      e.preventDefault();
    }
  });
  
  // Prevenir zoom com mouse
  document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });
  
  // Prevenir zoom com toque
  document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
  
  document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
  
  // Prevenir zoom com duplo clique
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(e) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
  
  // Prevenir zoom com 3 cliques
  let clickCount = 0;
  let clickTimer;
  
  document.addEventListener('click', function(e) {
    clickCount++;
    clearTimeout(clickTimer);
    
    if (clickCount >= 3) {
      e.preventDefault();
      e.stopPropagation();
      clickCount = 0;
      return false;
    }
    
    clickTimer = setTimeout(function() {
      clickCount = 0;
    }, 300);
  });
  
  // Forçar viewport
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);
  } else {
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
  }
});

// Prevenir zoom globalmente
window.addEventListener('load', function() {
  // Desabilitar zoom em todos os elementos
  const allElements = document.querySelectorAll('*');
  allElements.forEach(function(element) {
    element.style.touchAction = 'none';
    element.style.webkitTextSizeAdjust = 'none';
    element.style.textSizeAdjust = 'none';
    element.style.userSelect = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.mozUserSelect = 'none';
    element.style.msUserSelect = 'none';
  });
}); 