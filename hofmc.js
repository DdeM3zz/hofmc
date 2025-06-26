const originalContent = document.body.innerHTML;

document.body.innerHTML = '';

const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: black;
    overflow: hidden;
  }
  .video-container {
    width: 100%;
    max-width: 800px;
  }
  iframe {
    width: 100%;
    height: 450px;
    border: none;
  }
`;
document.head.appendChild(style);

const videoContainer = document.createElement('div');
videoContainer.className = 'video-container';

videoContainer.innerHTML = `
  <iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
`;

document.body.appendChild(videoContainer);

while (document.body.firstChild) {
  if (document.body.firstChild !== videoContainer) {
    document.body.removeChild(document.body.firstChild);
  }
}
