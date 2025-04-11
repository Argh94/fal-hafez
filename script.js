function getRandomFal() {
  fetch('hafez.json')
    .then(response => response.json())
    .then(data => {
      // انتخاب یه فال رندوم
      const randomIndex = Math.floor(Math.random() * data.length);
      const fal = data[randomIndex];
      
      // نمایش عنوان و تفسیر
      document.getElementById('fal-title').textContent = fal.title;
      document.getElementById('fal-interpreter').textContent = fal.interpreter;
    })
    .catch(error => {
      console.error('خطا در لود فال:', error);
      document.getElementById('fal-title').textContent = 'خطا!';
      document.getElementById('fal-interpreter').textContent = 'فایل فال لود نشد. دوباره امتحان کن.';
    });
}
