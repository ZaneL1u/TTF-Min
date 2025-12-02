// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all tabs and sections
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.font-section').forEach(s => s.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding section
    btn.classList.add('active');
    document.getElementById(btn.dataset.font).classList.add('active');
  });
});

// Font size slider for each font
const fontConfigs = [
  { id: 'sans', previewId: 'weight-preview-sans' },
  { id: 'serif', previewId: 'weight-preview-serif' },
  { id: 'alibaba', previewId: 'weight-preview-alibaba' },
  { id: 'sarasa', previewId: 'weight-preview-sarasa' }
];

fontConfigs.forEach(config => {
  const slider = document.getElementById(`font-size-${config.id}`);
  const valueDisplay = document.getElementById(`font-size-value-${config.id}`);
  const preview = document.getElementById(config.previewId);
  const textInput = document.getElementById(`preview-text-${config.id}`);
  
  if (slider && valueDisplay && preview) {
    slider.addEventListener('input', () => {
      const size = slider.value;
      valueDisplay.textContent = `${size}px`;
      preview.querySelectorAll('.weight-text').forEach(el => {
        el.style.fontSize = `${size}px`;
      });
    });
  }
  
  if (textInput && preview) {
    textInput.addEventListener('input', () => {
      const text = textInput.value || '汉字之美，在于形意兼备';
      preview.querySelectorAll('.weight-text').forEach(el => {
        el.textContent = text;
      });
    });
  }
});

// Copy code functionality
function copyCode(btn) {
  const codeBlock = btn.closest('.code-block');
  const code = codeBlock.querySelector('code').textContent;
  
  navigator.clipboard.writeText(code).then(() => {
    // Show success state
    btn.textContent = '已复制';
    btn.classList.add('copied');
    
    // Show toast
    showToast();
    
    // Reset button after 2 seconds
    setTimeout(() => {
      btn.textContent = '复制';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
    btn.textContent = '复制失败';
    setTimeout(() => {
      btn.textContent = '复制';
    }, 2000);
  });
}

// Toast notification
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// Initialize preview text synchronization
document.addEventListener('DOMContentLoaded', () => {
  // Set initial font sizes
  document.querySelectorAll('.weight-text').forEach(el => {
    el.style.fontSize = '32px';
  });
});
