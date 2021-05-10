//== Modal Toggle
function modalSampleToggle() {
    document.getElementById('modalSample').classList.toggle('open');
    document.getElementById('inv-modal').classList.toggle('open');
    document.getElementById('body').classList.toggle('scrollhidden');
}
// Select all the elements with example class.
var modalSample = document.querySelectorAll('.modalcta');
// Loop through the elements.
for (var i = 0; i < modalSample.length; i++) {
// Add the class margin to the individual elements.
modalSample[i].addEventListener('click', modalSampleToggle);
}
//------------------------ Modal Header

new ClipboardJS('.btn-copy');
