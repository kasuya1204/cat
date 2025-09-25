// ボタン要素を取得
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// スクロールに応じてボタンを表示/非表示
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// クリックでトップにスムーズスクロール
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
