const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

/*home html*/ 

const hiddenElements0 = document.querySelectorAll('.tit');
hiddenElements0.forEach((el) => observer.observe(el));

const bienvenue = document.querySelectorAll('.bienvenue');
bienvenue.forEach((el) => observer.observe(el));

const hiddenElements1 = document.querySelectorAll('.algebre');
hiddenElements1.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.analyse');
hiddenElements2.forEach((el) => observer.observe(el));

const hiddenElements3 = document.querySelectorAll('.navigation');
hiddenElements3.forEach((el) => observer.observe(el));

const hiddenElements4 = document.querySelectorAll('.description');
hiddenElements4.forEach((el) => observer.observe(el));

/*description lesson html*/

const hiddenElements5 = document.querySelectorAll('.tablemat');
hiddenElements5.forEach((el) => observer.observe(el));

const hiddenElements6 = document.querySelectorAll('.reference');
hiddenElements6.forEach((el) => observer.observe(el));

const hiddenElements7 = document.querySelectorAll('.title_lesson');
hiddenElements7.forEach((el) => observer.observe(el));

/*lesson_cs css*/

const chapitre = document.querySelectorAll('.chapitre');
chapitre.forEach((el) => observer.observe(el));

const subtitle = document.querySelectorAll('.subtitle');
subtitle.forEach((el) => observer.observe(el));