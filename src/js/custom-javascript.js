// Add your custom JS here.
// AOS.init({
//   easing: 'ease-out',
//   once: true,
//   duration: 600,
// });

// (function() {
//   // Hide header on scroll
//   var doc = document.documentElement;
//   var w = window;

//   var prevScroll = w.scrollY || doc.scrollTop;
//   var curScroll;
//   var direction = 0;
//   var prevDirection = 0;

//   var header = document.getElementById('wrapper-navbar');

//   var checkScroll = function() {
//       // Find the direction of scroll (0 - initial, 1 - up, 2 - down)
//       curScroll = w.scrollY || doc.scrollTop;
//       if (curScroll > prevScroll) {
//           // Scrolled down
//           direction = 2;
//       } else if (curScroll < prevScroll) {
//           // Scrolled up
//           direction = 1;
//       }

//       if (direction !== prevDirection) {
//           toggleHeader(direction, curScroll);
//       }

//       prevScroll = curScroll;
//   };

//   var toggleHeader = function(direction, curScroll) {
//       if (direction === 2 && curScroll > 125) {
//           // Replace 52 with the height of your header in px
//           if (!document.getElementById('navbar').classList.contains('show')) {
//               header.classList.add('hide');
//               prevDirection = direction;
//           }
//       } else if (direction === 1) {
//           header.classList.remove('hide');
//           prevDirection = direction;
//       }
//   };

//   window.addEventListener('scroll', checkScroll);
// }
// )();


/*

  // Header background
  document.addEventListener('scroll', function() {
      var nav = document.getElementById('navbar');
    //   var primaryNav = document.getElementById('primaryNav');
    //   if (!primaryNav.classList.contains('show')) {
    //       nav.classList.toggle('scrolled', window.scrollY > nav.offsetHeight);
    //   }
      document.querySelectorAll('.dropdown-menu').forEach(function(dropdown) {
          dropdown.classList.remove('show');
      });
      document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
          toggle.classList.remove('show');
          toggle.blur();
      });
  });

*/

const people = document.querySelectorAll('.hub-team__card');
const bios = document.querySelectorAll('.bio-card');

people.forEach((person) => {
    person.addEventListener('click', (e) => {

        people.forEach((member) => {
            member.classList.remove('reveal');
        });

        person.classList.add('reveal');

        let who = person.getAttribute('id')

        const shown = document.querySelectorAll('.bio-show');
        shown.forEach((elem) => {
            elem.remove();
        });

        const newItem = document.createElement('div');
        newItem.classList.add('bio-show');

        
        const content = document.getElementById(who + '-info');
        
        newItem.innerHTML = content.innerHTML;
        
        person.after(newItem);

        e.stopPropagation();
    })
})


// Add click event listener to the document
document.addEventListener("click", () => {
    // Remove "active" class from all elements
    people.forEach((member) => {
    	member.classList.remove("reveal");
    });
    const shown = document.querySelectorAll('.bio-show');
    shown.forEach((elem) => {
        elem.remove();
    });

});
