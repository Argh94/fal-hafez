const getFalBtn = document.getElementById("get-fal");
const falTitle = document.getElementById("fal-title");
const falDescription = document.getElementById("fal-description");

async function getFal() {
    getFalBtn.textContent = "لطفا صبر کنید...";
    getFalBtn.disabled = true;

    try {
        const response = await fetch('./hafez.json'); // مسیر نسبی
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const fal = data[randomIndex];
        
        // تأخیر ۳ ثانیه
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        falTitle.textContent = fal.title;
        falDescription.textContent = fal.interpreter;
    } catch (error) {
        console.error('Error fetching fal:', error);
        falTitle.textContent = "خطا";
        falDescription.textContent = "مشکلی در دریافت فال پیش آمد.";
    } finally {
        getFalBtn.textContent = "نیت کنید و اشاره‌ای بفرمایید";
        getFalBtn.disabled = false;
    }
}

getFalBtn.addEventListener("click", getFal);
