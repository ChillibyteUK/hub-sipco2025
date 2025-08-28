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


document.querySelectorAll('.hub-team__grid').forEach(grid => {
    let openDetail = null;
    let openCard = null;

    function closeDetail(animated = true) {
        if (!openDetail) return;

        if (animated) {
            openDetail.classList.add('fade-out');
            openDetail.addEventListener('animationend', () => {
                if (openDetail) openDetail.remove();
                openDetail = null;
            }, { once: true });
        } else {
            openDetail.remove();
            openDetail = null;
        }

        if (openCard) openCard.classList.remove('active');
        grid.classList.remove('has-detail');
        openCard = null;
    }

    grid.addEventListener('click', e => {
        const card = e.target.closest('.hub-team__card');
        if (!card) return;

        // toggle off if clicking same card again
        if (openCard === card) {
            closeDetail();
            return;
        }

        // clear previous detail
        closeDetail(false);

        // clone hidden HTML inside this card
        const hidden = card.querySelector('.detail-content');
        const detail = document.createElement('div');
        detail.className = 'detail';
        detail.innerHTML = hidden.innerHTML;

        // insert after the correct row
        const cards = Array.from(grid.children).filter(el => el.classList.contains('hub-team__card'));
        const index = cards.indexOf(card);
        const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
        const rowEnd = Math.ceil((index + 1) / cols) * cols - 1;
        const insertAfter = cards[Math.min(rowEnd, cards.length - 1)];
        insertAfter.insertAdjacentElement('afterend', detail);

        // mark active states
        card.classList.add('active');
        grid.classList.add('has-detail');

        openDetail = detail;
        openCard = card;
    });

    // click outside to close
    document.addEventListener('click', e => {
        if (openDetail && !grid.contains(e.target)) {
            closeDetail();
        }
    });

    // close detail on resize
    window.addEventListener('resize', () => {
        closeDetail(false);
    });
});