//== Anchor Scrollsmooth
// Vanilla JavaScript Scroll to Anchor @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
(function() {
    
    function scrollTo() {
        const links = document.querySelectorAll('.btn-box .btnInfo');
        links.forEach(each => (each.onclick = scrollAnchors));
    }

    function scrollAnchors(e, respond = null) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
        e.preventDefault();
        var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = '-1';
                targetAnchor.focus();
                window.history.pushState('', '', targetID);
                clearInterval(checkIfDone);
            }
        }, 150);
    }

	scrollTo();
})();
//======================== /Anchor Scrollsmooth

//-== MainContent Toggle
(function(){
    function infoToggle() {
        document.getElementById('moduleInfo').classList.toggle('open');
    }
    
    // Select all the elements with example class.
    var btnInfo = document.querySelectorAll('.btnInfo');
    var closeInfo = document.querySelectorAll('.close-button');
    
    // Loop through the elements.
    for (var i = 0; i < btnInfo.length; i++) {
        btnInfo[i].addEventListener('click', infoToggle);
    }
    for (var i = 0; i < closeInfo.length; i++) {
        closeInfo[i].addEventListener('click', infoToggle);
    }
})();
//======================== /MainContent Toggle

//-== NewsletterModal Toggle
(function(){
    function newsletterToggle() {
        document.getElementById('newsletter').classList.toggle('in');
        document.getElementById('modal-backdrop').classList.toggle('in');
    }
    
    // Select all the elements with example class.
    var btnModal = document.querySelectorAll('.btn-modal');
    var closeNewsletterModal = document.querySelectorAll('.close-button-modal');
    var backdropBtn = document.querySelectorAll('.modal-bta');
    
    // Loop through the elements.
    for (var i = 0; i < btnModal.length; i++) {
        btnModal[i].addEventListener('click', newsletterToggle);
    }
    for (var i = 0; i < closeNewsletterModal.length; i++) {
        closeNewsletterModal[i].addEventListener('click', newsletterToggle);
    }
    for (var i = 0; i < backdropBtn.length; i++) {
        backdropBtn[i].addEventListener('click', newsletterToggle);
    }
})();
//======================== /NewsletterModal Toggle
