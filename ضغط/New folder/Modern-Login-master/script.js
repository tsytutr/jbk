const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// دالة لإرسال بريد إلكتروني عند تسجيل الدخول أو التسجيل
function sendEmail(toEmail, toName) {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_name: toName,
        to_email: toEmail,
        message: "تم تسجيل الدخول بنجاح! مرحباً بك في موقعنا."
    }).then((response) => {
        console.log("تم إرسال البريد بنجاح!", response.status, response.text);
    }).catch((error) => {
        console.error("حدث خطأ أثناء إرسال البريد:", error);
    });
}

// مثال: إرسال بريد عند تسجيل الدخول
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;  // تأكد أن لديك حقل البريد الإلكتروني في النموذج
    const username = document.getElementById("username").value;

    // استدعاء دالة إرسال البريد الإلكتروني
    sendEmail(email, username);
});
