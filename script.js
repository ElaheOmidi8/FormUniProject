// ============================================================
// جاوااسکریپت بوک‌کلاب
// توسعه‌دهنده: شیما مرادی
// ============================================================

// ===== تغییر تب‌ها =====
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // حذف کلاس active از همه تب‌ها
        tabs.forEach(t => t.classList.remove('active'));
        
        // اضافه کردن کلاس active به تب کلیک شده
        this.classList.add('active');
        
        // نمایش فرم مربوطه
        const tabName = this.dataset.tab;
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        
        if (tabName === 'login') {
          loginForm.classList.add('active');
          registerForm.classList.remove('active');
          // پاک کردن خطاها
          clearErrors();
        } else {
          registerForm.classList.add('active');
          loginForm.classList.remove('active');
          // پاک کردن خطاها
          clearErrors();
        }
      });
    });
  });
  
  // ===== پاک کردن خطاها =====
  function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-msg');
    errorMessages.forEach(msg => msg.textContent = '');
    
    const inputs = document.querySelectorAll('.form-group input');
    inputs.forEach(input => input.classList.remove('error'));
  }
  
  // ===== اعتبارسنجی فرم ورود =====
  document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    
    if (loginBtn) {
      loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email');
        const password = document.getElementById('login-password');
        const emailError = document.getElementById('login-email-error');
        const passwordError = document.getElementById('login-password-error');
        
        let isValid = true;
        
        // اعتبارسنجی ایمیل
        if (!email.value.trim()) {
          emailError.textContent = 'لطفاً ایمیل خود را وارد کنید';
          email.classList.add('error');
          isValid = false;
        } else if (!isValidEmail(email.value)) {
          emailError.textContent = 'لطفاً یک ایمیل معتبر وارد کنید';
          email.classList.add('error');
          isValid = false;
        } else {
          emailError.textContent = '';
          email.classList.remove('error');
        }
        
        // اعتبارسنجی رمز عبور
        if (!password.value.trim()) {
          passwordError.textContent = 'لطفاً رمز عبور خود را وارد کنید';
          password.classList.add('error');
          isValid = false;
        } else if (password.value.length < 6) {
          passwordError.textContent = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
          password.classList.add('error');
          isValid = false;
        } else {
          passwordError.textContent = '';
          password.classList.remove('error');
        }
        
        if (isValid) {
          // افکت موفقیت
          this.style.background = '#27ae60';
          this.textContent = '✓ ورود موفق';
          setTimeout(() => {
            this.style.background = '#8b6f4c';
            this.textContent = 'ورود';
            alert('✅ ورود موفق! خوش آمدید');
          }, 800);
        }
      });
    }
  });
  
  // ===== اعتبارسنجی فرم ثبت‌نام =====
  document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('register-btn');
    
    if (registerBtn) {
      registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('register-name');
        const email = document.getElementById('register-email');
        const password = document.getElementById('register-password');
        const passwordConfirm = document.getElementById('register-password-confirm');
        const terms = document.getElementById('register-terms');
        
        const nameError = document.getElementById('register-name-error');
        const emailError = document.getElementById('register-email-error');
        const passwordError = document.getElementById('register-password-error');
        const passwordConfirmError = document.getElementById('register-password-confirm-error');
        
        let isValid = true;
        
        // اعتبارسنجی نام
        if (!name.value.trim()) {
          nameError.textContent = 'لطفاً نام کامل خود را وارد کنید';
          name.classList.add('error');
          isValid = false;
        } else if (name.value.trim().length < 3) {
          nameError.textContent = 'نام باید حداقل ۳ کاراکتر باشد';
          name.classList.add('error');
          isValid = false;
        } else {
          nameError.textContent = '';
          name.classList.remove('error');
        }
        
        // اعتبارسنجی ایمیل
        if (!email.value.trim()) {
          emailError.textContent = 'لطفاً ایمیل خود را وارد کنید';
          email.classList.add('error');
          isValid = false;
        } else if (!isValidEmail(email.value)) {
          emailError.textContent = 'لطفاً یک ایمیل معتبر وارد کنید';
          email.classList.add('error');
          isValid = false;
        } else {
          emailError.textContent = '';
          email.classList.remove('error');
        }
        
        // اعتبارسنجی رمز عبور
        if (!password.value.trim()) {
          passwordError.textContent = 'لطفاً رمز عبور خود را وارد کنید';
          password.classList.add('error');
          isValid = false;
        } else if (password.value.length < 6) {
          passwordError.textContent = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
          password.classList.add('error');
          isValid = false;
        } else {
          passwordError.textContent = '';
          password.classList.remove('error');
        }
        
        // اعتبارسنجی تکرار رمز عبور
        if (!passwordConfirm.value.trim()) {
          passwordConfirmError.textContent = 'لطفاً رمز عبور را تکرار کنید';
          passwordConfirm.classList.add('error');
          isValid = false;
        } else if (password.value !== passwordConfirm.value) {
          passwordConfirmError.textContent = 'رمز عبور با تکرار آن مطابقت ندارد';
          passwordConfirm.classList.add('error');
          isValid = false;
        } else {
          passwordConfirmError.textContent = '';
          passwordConfirm.classList.remove('error');
        }
        
        // اعتبارسنجی قوانین
        if (!terms.checked) {
          alert('لطفاً با قوانین و مقررات موافقت کنید');
          isValid = false;
        }
        
        if (isValid) {
          // افکت موفقیت
          this.style.background = '#27ae60';
          this.textContent = '✓ ثبت‌نام موفق';
          setTimeout(() => {
            this.style.background = '#8b6f4c';
            this.textContent = 'ثبت‌نام';
            alert('✅ ثبت‌نام با موفقیت انجام شد!');
            // پاک کردن فرم
            name.value = '';
            email.value = '';
            password.value = '';
            passwordConfirm.value = '';
            terms.checked = false;
          }, 800);
        }
      });
    }
  });
  
  // ===== تابع اعتبارسنجی ایمیل =====
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // ===== نمایش خطاها با انیمیشن =====
  document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-group input');
    
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.classList.remove('error');
        const errorMsg = this.parentElement.querySelector('.error-msg');
        if (errorMsg) {
          errorMsg.textContent = '';
        }
      });
    });
  });
  
  console.log('🚀 بوک‌کلاب با موفقیت بارگذاری شد!');
  console.log('👥 تیم ما: الهه امیدی، فاطمه حسن‌پور، مریم بدخشان، شیما مرادی');