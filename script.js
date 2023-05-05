//your JS code here. If required.
line.style.animation = 'rotate 3s linear infinite';

// Add the necessary CSS styles to the page header to define the rotate animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.body.appendChild(style);