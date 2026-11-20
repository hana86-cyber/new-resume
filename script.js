document.addEventListener('DOMContentLoaded', function() {
   // فعال کردن انیمیشن نوارهای مهارت هنگام اسکرول
   const skillSection = document.querySelector('.skills-section');
   const skillBars = document.querySelectorAll('.skill-progress');
   
   function animateSkills() {
      skillBars.forEach(bar => {
         const width = bar.getAttribute('data-width');
         bar.style.width = width;
      });
   }
   
   // راه‌اندازی مشاهده‌گر برای انیمیشن مهارت‌ها
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
         }
      });
   }, { threshold: 0.3 });
   
   if (skillSection) {
      observer.observe(skillSection);
   }
   
   // انیمیشن مدارهای مهارت
   const orbits = document.querySelectorAll('.orbit');
   orbits.forEach(orbit => {
      const animationDuration = orbit.classList.contains('orbit-1') ? 20 : 
                              orbit.classList.contains('orbit-2') ? 30 : 40;
      orbit.style.animationDuration = `${animationDuration}s`;
   });
   
   // تعامل با گره‌های مهارت
   const skillNodes = document.querySelectorAll('.skill-node');
   skillNodes.forEach(node => {
      node.addEventListener('mouseenter', function() {
         const skillName = this.getAttribute('data-skill');
         const tooltip = document.createElement('div');
         tooltip.className = 'skill-tooltip';
         tooltip.textContent = skillName;
         document.body.appendChild(tooltip);
         
         const rect = this.getBoundingClientRect();
         tooltip.style.left = `${rect.left + rect.width / 2}px`;
         tooltip.style.top = `${rect.top - 40}px`;
         tooltip.style.transform = 'translateX(-50%)';
      });
      
      node.addEventListener('mouseleave', function() {
         const tooltip = document.querySelector('.skill-tooltip');
         if (tooltip) {
            tooltip.remove();
         }
      });
   });
});


      // فیلتر نمونه‌کارها
document.addEventListener('DOMContentLoaded', function() {
   const filterButtons = document.querySelectorAll('.filter-btn');
   const portfolioItems = document.querySelectorAll('.portfolio-item');
   
   filterButtons.forEach(button => {
      button.addEventListener('click', function() {
         // حذف کلاس active از همه دکمه‌ها
         filterButtons.forEach(btn => btn.classList.remove('active'));
         
         // اضافه کردن کلاس active به دکمه کلیک شده
         this.classList.add('active');
         
         // دریافت فیلتر انتخاب شده
         const filterValue = this.getAttribute('data-filter');
         
         // فیلتر کردن آیتم‌ها
         portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
               item.style.display = 'block';
               setTimeout(() => {
                  item.style.opacity = '1';
                  item.style.transform = 'scale(1)';
               }, 10);
            } else {
               item.style.opacity = '0';
               item.style.transform = 'scale(0.8)';
               setTimeout(() => {
                  item.style.display = 'none';
               }, 300);
            }
         });
      });
   });
});
            // اعتبارسنجی فرم تماس
            document.addEventListener('DOMContentLoaded', function() {
               const contactForm = document.getElementById('contactForm');
               const formStatus = document.getElementById('formStatus');
               
               if (contactForm) {
                  contactForm.addEventListener('submit', function(e) {
                     e.preventDefault();
                     
                     // شبیه‌سازی ارسال فرم
                     formStatus.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهم گرفت.</div>';
                     formStatus.style.display = 'block';
                     
                     // پاک کردن فرم
                     setTimeout(function() {
                        contactForm.reset();
                        formStatus.style.display = 'none';
                     }, 5000);
                  });
                  
                  // انیمیشن labelهای فرم
                  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
                  formInputs.forEach(input => {
                     input.addEventListener('focus', function() {
                        this.parentElement.classList.add('focused');
                     });
                     
                     input.addEventListener('blur', function() {
                        if (this.value === '') {
                           this.parentElement.classList.remove('focused');
                        }
                     });
                     
                     // بررسی مقدار اولیه
                     if (input.value !== '') {
                        input.parentElement.classList.add('focused');
                     }
                  });
               }
            });
      
      // پیش‌بارگذاری
      window.addEventListener('load', function() {
         const preloader = document.querySelector('.preloader');
         setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
               preloader.style.display = 'none';
            }, 800);
         }, 2000);
      });

      // انیمیشن متن برای SVG
      document.addEventListener('DOMContentLoaded', function() {
         const textElement = document.querySelector('.intro-text text');
         if (textElement) {
            setTimeout(function() {
               textElement.classList.add('animate-stroke');
            }, 2000);
         }
      });

            // انیمیشن شمارنده آمار
            function animateCounter() {
               const counters = document.querySelectorAll('.stat-number');
               const speed = 200;
               
               counters.forEach(counter => {
                  const target = +counter.getAttribute('data-count');
                  const count = +counter.innerText;
                  const increment = Math.ceil(target / speed);
                  
                  if (count < target) {
                     counter.innerText = Math.min(count + increment, target);
                     setTimeout(() => animateCounter(counter), 1);
                  }
               });
            }
            
            // فعال کردن انیمیشن هنگام اسکرول
            window.addEventListener('scroll', function() {
               const aboutSection = document.querySelector('.about-section');
               if (aboutSection.getBoundingClientRect().top < window.innerHeight - 100) {
                  animateCounter();
                  window.removeEventListener('scroll', this);
               }
            });
      

                  // نقشه تعاملی
      document.addEventListener('DOMContentLoaded', function() {
         // مختصات تهران
         const tehranCoords = [35.6892, 51.3890];
         
         // ایجاد نقشه
         const map = L.map('interactiveMap', {
            zoomControl: false,
            attributionControl: false
         }).setView(tehranCoords, 13);
         
         // افزودن لایه نقشه (استایل تیره)
         L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19
         }).addTo(map);
         
         // افزودن نشانگر با افکت انیمیشن
         const markerIcon = L.divIcon({
            className: 'animated-marker',
            html: '<div class="marker-pulse"></div><div class="marker-icon"><i class="fas fa-map-marker-alt"></i></div>',
            iconSize: [40, 40],
            iconAnchor: [20, 40]
         });
         
         const marker = L.marker(tehranCoords, {icon: markerIcon}).addTo(map);
         
         // افزودن پاپاپ به نشانگر
         marker.bindPopup(`
            <div class="map-popup">
               <h4>دفتر کار من</h4>
               <p>تهران، خیابان نمونه، پلاک ۱۲۳</p>
               <a href="#" class="map-direction">دریافت مسیر <i class="fas fa-route"></i></a>
            </div>
         `).openPopup();
         
         // افزودن کنترل‌های نقشه
         L.control.zoom({
            position: 'bottomright'
         }).addTo(map);
         
         // افزودن کنترل مقیاس
         L.control.scale({
            position: 'bottomleft',
            metric: true,
            imperial: false
         }).addTo(map);
         
         // افزودن دکمه مکان‌یابی
         const locateControl = L.control({
            position: 'topright'
         });
         
         locateControl.onAdd = function(map) {
            const div = L.DomUtil.create('div', 'locate-control');
            div.innerHTML = '<button title="مکان یابی من"><i class="fas fa-location-arrow"></i></button>';
            
            div.addEventListener('click', function() {
               map.locate({setView: true, maxZoom: 16});
            });
            
            return div;
         };
         
         locateControl.addTo(map);
         
         // رویداد مکان‌یابی
         map.on('locationfound', function(e) {
            L.circle(e.latlng, {
               color: 'var(--primary)',
               fillColor: 'var(--primary-light)',
               fillOpacity: 0.2,
               radius: e.accuracy / 2
            }).addTo(map);
            
            L.marker(e.latlng, {
               icon: L.divIcon({
                  className: 'current-location-marker',
                  html: '<div class="current-location-pulse"></div><div class="current-location-icon"><i class="fas fa-circle"></i></div>',
                  iconSize: [20, 20],
                  iconAnchor: [10, 10]
               })
            }).addTo(map).bindPopup('شما اینجا هستید').openPopup();
         });
      });



         // تابع تبدیل اعداد انگلیسی به فارسی
         function toPersianNumber(enNumber) {
             const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
             return enNumber.toString().replace(/\d/g, function(d) {
                 return persianDigits[parseInt(d)];
             });
         }
         function toPersianNumber(enNumber) {
            const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
            return enNumber.toString().replace(/\d/g, function(d) {
                return persianDigits[parseInt(d)];
            });
        }
        
        
         // انیمیشن شمارنده آمار - نسخه اصلاح شده برای فارسی
         function animateCounter() {
             const counters = document.querySelectorAll('.stat-number');
             const speed = 200;
             
             counters.forEach(counter => {
                 const target = +counter.getAttribute('data-count');
                 const count = +counter.innerText.replace(/[۰-۹]/g, function(d) {
                     return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d);
                 });
                 
                 if (count < target) {
                     const increment = Math.ceil(target / speed);
                     const newCount = Math.min(count + increment, target);
                     counter.innerText = toPersianNumber(newCount);
                     setTimeout(() => animateCounter(), 1);
                 }
             });
         }
         
         function animateStats() {
             const statNumbers = document.querySelectorAll('.testimonials-stats h3');
             
             statNumbers.forEach(stat => {
                 const target = parseInt(stat.getAttribute('data-count'));
                 const duration = 2000;
                 const increment = Math.ceil(target / (duration / 16));
                 let current = 0;
                 
                 const timer = setInterval(() => {
                     current += increment;
                     if (current >= target) {
                         current = target;
                         clearInterval(timer);
                     }
                     stat.textContent = toPersianNumber(current);
                 }, 16);
             });
         }


      // اسکریپت مدیریت هدر
document.addEventListener('DOMContentLoaded', function() {
   const header = document.querySelector('.glass-header');
   const hamburger = document.querySelector('.hamburger-menu');
   const navMenu = document.querySelector('.nav-menu');
   const themeToggle = document.querySelector('.theme-toggle');
   const scrollTopBtn = document.querySelector('.scroll-top-btn');
   
   // تغییر استایل هدر هنگام اسکرول
   window.addEventListener('scroll', function() {
       if (window.scrollY > 100) {
           header.classList.add('scrolled');
       } else {
           header.classList.remove('scrolled');
       }
       
       // نمایش دکمه بازگشت به بالا
       if (window.scrollY > 500) {
           scrollTopBtn.classList.add('show');
       } else {
           scrollTopBtn.classList.remove('show');
       }
   });
   
   // مدیریت منوی همبرگری
   hamburger.addEventListener('click', function() {
       hamburger.classList.toggle('active');
       navMenu.classList.toggle('active');
   });
   
   // بستن منو هنگام کلیک روی لینک‌ها
   document.querySelectorAll('.nav-link').forEach(link => {
       link.addEventListener('click', function() {
           hamburger.classList.remove('active');
           navMenu.classList.remove('active');
       });
   });
   
   // تغییر تم
   themeToggle.addEventListener('click', function() {
       document.body.classList.toggle('light-theme');
       const icon = themeToggle.querySelector('i');
       
       if (document.body.classList.contains('light-theme')) {
           icon.classList.remove('fa-moon');
           icon.classList.add('fa-sun');
       } else {
           icon.classList.remove('fa-sun');
           icon.classList.add('fa-moon');
       }
   });
   
   // بازگشت به بالا
   scrollTopBtn.addEventListener('click', function() {
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       });
   });
   
   // انیمیشن اسکرول برای لینک‌های هدر
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
           e.preventDefault();
           const targetId = this.getAttribute('href');
           
           if (targetId === '#') return;
           
           const targetElement = document.querySelector(targetId);
           if (targetElement) {
               const headerHeight = header.offsetHeight;
               const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
               
               window.scrollTo({
                   top: targetPosition,
                   behavior: 'smooth'
               });
           }
       });
   });
});



// تعامل بخش فرآیند خلاقانه
document.addEventListener('DOMContentLoaded', function() {
   const processSteps = document.querySelectorAll('.process-step');
   const detailContents = document.querySelectorAll('.detail-content');
   
   // فعال کردن اولین مرحله به صورت پیش‌فرض
   if (processSteps.length > 0) {
      activateStep(1);
   }
   
   // اضافه کردن رویداد کلیک به مراحل
   processSteps.forEach(step => {
      step.addEventListener('click', function() {
         const stepNumber = this.getAttribute('data-step');
         activateStep(stepNumber);
      });
   });
   
   // تابع فعال کردن مرحله
   function activateStep(stepNumber) {
      // غیرفعال کردن همه مراحل
      processSteps.forEach(step => {
         step.classList.remove('active');
      });
      
      // پنهان کردن همه محتواها
      detailContents.forEach(content => {
         content.classList.remove('active');
      });
      
      // فعال کردن مرحله انتخاب شده
      const selectedStep = document.querySelector(`.process-step[data-step="${stepNumber}"]`);
      const selectedContent = document.querySelector(`.detail-content[data-step="${stepNumber}"]`);
      
      if (selectedStep && selectedContent) {
         selectedStep.classList.add('active');
         selectedContent.classList.add('active');
      }
   }
   
   // انیمیشن شکل‌های شناور
   const shapes = document.querySelectorAll('.shape');
   shapes.forEach((shape, index) => {
      shape.style.animationDelay = `${index * 1.5}s`;
   });
   
   // ایجاد انیمیشن برای مسیر فرآیند
   const journeyPath = document.querySelector('.journey-path');
   if (journeyPath) {
      let width = 0;
      const animatePath = setInterval(() => {
         if (width >= 100) {
            clearInterval(animatePath);
         } else {
            width += 2;
            journeyPath.style.background = `linear-gradient(90deg, var(--primary) 0%, var(--primary-light) ${width}%, transparent ${width}%)`;
         }
      }, 50);
   }
});


// اسکریپت بخش نظرات مشتریان
document.addEventListener('DOMContentLoaded', function() {
   const testimonialItems = document.querySelectorAll('.testimonial-item');
   const dotsContainer = document.querySelector('.testimonials-dots');
   const prevButton = document.querySelector('.testimonial-prev');
   const nextButton = document.querySelector('.testimonial-next');
   let currentIndex = 0;
   
   // ایجاد نقاط برای کاروسل
   testimonialItems.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToTestimonial(index));
      dotsContainer.appendChild(dot);
   });
   
   const dots = document.querySelectorAll('.testimonials-dots .dot');
   
   // نمایش اولین نظر
   showTestimonial(currentIndex);
   
   // تابع نمایش نظر
   function showTestimonial(index) {
      testimonialItems.forEach(item => item.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      testimonialItems[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
   }
   
   // رفتن به نظر خاص
   function goToTestimonial(index) {
      showTestimonial(index);
   }
   
   // نظر بعدی
   function nextTestimonial() {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= testimonialItems.length) nextIndex = 0;
      showTestimonial(nextIndex);
   }
   
   // نظر قبلی
   function prevTestimonial() {
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) prevIndex = testimonialItems.length - 1;
      showTestimonial(prevIndex);
   }
   
   // اضافه کردن event listener برای دکمه‌ها
   nextButton.addEventListener('click', nextTestimonial);
   prevButton.addEventListener('click', prevTestimonial);
   
   // تغییر خودکار نظرات هر 5 ثانیه
   let testimonialInterval = setInterval(nextTestimonial, 5000);
   
   // توقف تغییر خودکار هنگام هاور روی کاروسل
   const carousel = document.querySelector('.testimonials-carousel');
   carousel.addEventListener('mouseenter', () => {
      clearInterval(testimonialInterval);
   });
   
   carousel.addEventListener('mouseleave', () => {
      testimonialInterval = setInterval(nextTestimonial, 5000);
   });
   
   // انیمیشن آمار
   const statNumbers = document.querySelectorAll('.testimonials-stats h3');
   const statsSection = document.querySelector('.testimonials-stats');
   
   function animateStats() {
      statNumbers.forEach(stat => {
         const target = parseInt(stat.getAttribute('data-count'));
         const duration = 2000;
         const increment = Math.ceil(target / (duration / 16));
         let current = 0;
         
         const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
               current = target;
               clearInterval(timer);
            }
            stat.textContent = current;
         }, 16);
      });
   }
   
   // راه‌اندازی مشاهده‌گر برای انیمیشن آمار
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
         }
      });
   }, { threshold: 0.5 });
   
   if (statsSection) {
      observer.observe(statsSection);
   }
   
   // انیمیشن ذرات
   const particles = document.querySelectorAll('.particle');
   particles.forEach((particle, index) => {
      particle.style.animationDelay = `${index * 2}s`;
   });
});









document.addEventListener('DOMContentLoaded', function() {
   const header = document.querySelector('.glass-header');
   const hamburger = document.querySelector('.hamburger-menu');
   const navMenu = document.querySelector('.nav-menu');
   const themeToggle = document.querySelector('.theme-toggle');
   const navLinks = document.querySelectorAll('.nav-link');
   
   // تغییر استایل هدر هنگام اسکرول
   window.addEventListener('scroll', function() {
       if (window.scrollY > 50) {
           header.classList.add('scrolled');
       } else {
           header.classList.remove('scrolled');
       }
   });
   
   // مدیریت منوی همبرگری
   hamburger.addEventListener('click', function() {
       hamburger.classList.toggle('active');
       navMenu.classList.toggle('active');
       
       // جلوگیری از اسکرول هنگام باز بودن منو
       if (navMenu.classList.contains('active')) {
           document.body.style.overflow = 'hidden';
       } else {
           document.body.style.overflow = 'auto';
       }
   });
   
   // بستن منو هنگام کلیک روی لینک‌ها
   navLinks.forEach(link => {
       link.addEventListener('click', function() {
           hamburger.classList.remove('active');
           navMenu.classList.remove('active');
           document.body.style.overflow = 'auto';
           
           // فعال کردن لینک کلیک شده
           navLinks.forEach(item => item.classList.remove('active'));
           this.classList.add('active');
       });
   });
   
   // تغییر تم
   themeToggle.addEventListener('click', function() {
       document.body.classList.toggle('light-theme');
       const icon = themeToggle.querySelector('i');
       
       if (document.body.classList.contains('light-theme')) {
           icon.classList.remove('fa-moon');
           icon.classList.add('fa-sun');
           // تغییر متغیرها برای تم روشن
           document.documentElement.style.setProperty('--text-primary', '#2d2d2d');
           document.documentElement.style.setProperty('--text-secondary', '#5a5a5a');
           document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.85)');
           document.documentElement.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.1)');
       } else {
           icon.classList.remove('fa-sun');
           icon.classList.add('fa-moon');
           // بازگشت به متغیرهای اصلی
           document.documentElement.style.setProperty('--text-primary', '#f1f1f1');
           document.documentElement.style.setProperty('--text-secondary', '#d1d1d1');
           document.documentElement.style.setProperty('--glass-bg', 'rgba(30, 20, 40, 0.85)');
           document.documentElement.style.setProperty('--glass-border', 'rgba(200, 180, 255, 0.15)');
       }
   });
   
   // بستن منو با کلیک خارج از آن
   document.addEventListener('click', function(event) {
       const isClickInsideNav = navMenu.contains(event.target);
       const isClickOnHamburger = hamburger.contains(event.target);
       
       if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
           hamburger.classList.remove('active');
           navMenu.classList.remove('active');
           document.body.style.overflow = 'auto';
       }
   });
});

