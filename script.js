function getRandomFal() {
  const falResult = document.querySelector('.fal-result');
  falResult.classList.remove('show');
  
  fetch('hafez.json')
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const fal = data[randomIndex];
      
      document.getElementById('fal-title').textContent = fal.title;
      document.getElementById('fal-interpreter').textContent = fal.interpreter;
      
      // فعال کردن انیمیشن
      setTimeout(() => falResult.classList.add('show'), 10);
    })
    .catch(error => {
      console.error('خطا در لود فال:', error);
      document.getElementById('fal-title').textContent = 'خطا!';
      document.getElementById('fal-interpreter').textContent = 'فایل فال لود نشد. دوباره امتحان کن.';
    });
}

function shareFal() {
  const title = document.getElementById('fal-title').textContent;
  const interpreter = document.getElementById('fal-interpreter').textContent;
  const shareText = `فال حافظ: ${title}\n${interpreter}\nاز: https://argh94.github.io/fal-hafez/`;
  
  if (navigator.share) {
    navigator.share({
      title: 'فال حافظ',
      text: shareText
    }).catch(error => {
      console.error('خطا در اشتراک‌گذاری:', error);
    });
  } else {
    navigator.clipboard.writeText(shareText);
    alert('فال کپی شد! می‌تونی تو واتساپ یا جاهای دیگه پیست کنی.');
  }
}
