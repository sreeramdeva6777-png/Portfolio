/*=========================================
            TYPING ANIMATION
=========================================*/

const typing = document.querySelector(".typing");

const words = [

    "Java Full Stack Developer",

    "MERN Stack Developer",

    "Flutter Developer",

    "Software Engineer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();


/*=========================================
            STICKY HEADER
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

        header.style.background="rgba(255,255,255,.95)";

    }

    else{

        header.style.boxShadow="none";

        header.style.background="rgba(255,255,255,.88)";

    }

});


/*=========================================
            ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menu-btn");

const nav = document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("showMenu");

});


document.querySelectorAll("#navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("showMenu");

    });

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/*==================================================
            SCROLL REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(

".section-title",

".about-image",

".about-content",

".skill-card",

".timeline-item",

".project-card",

".education-card",

".certificate-card",

".contact-card",

".contact-form",

".stat-card"

);

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();



/*==================================================
            STATS COUNTER
==================================================*/

const counters = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function startCounter(){

    if(counterStarted) return;

    const stats = document.querySelector(".stats");

    const statsTop = stats.offsetTop;

    if(window.scrollY + window.innerHeight > statsTop){

        counterStarted = true;

        counters.forEach(counter=>{

            const text = counter.innerText;

            const number = parseFloat(text);

            const suffix = text.replace(/[0-9.]/g,"");

            let current = 0;

            const increment = number / 60;

            function updateCounter(){

                if(current < number){

                    current += increment;

                    if(number % 1 !== 0){

                        counter.innerText = current.toFixed(2) + suffix;

                    }else{

                        counter.innerText = Math.ceil(current) + suffix;

                    }

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerText = text;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll",startCounter);



/*==================================================
            BACK TO TOP BUTTON
==================================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.classList.add("showTop");

    }

    else{

        topBtn.classList.remove("showTop");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*==================================================
            DARK MODE
==================================================*/

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML =

        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML =

        '<i class="fa-solid fa-moon"></i>';

    }

});



/*==================================================
            CARD HOVER EFFECT
==================================================*/

const cards = document.querySelectorAll(

".skill-card,.project-card,.education-card,.certificate-card"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height/2)/18;

        const rotateY = (x - rect.width/2)/18;

        card.style.transform =

        `perspective(1000px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});



/*==================================================
            CURRENT YEAR
==================================================*/

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright p");

if(copyright){

    copyright.innerHTML =

    `© ${year} Sreeram Vemula. All Rights Reserved.`;

}