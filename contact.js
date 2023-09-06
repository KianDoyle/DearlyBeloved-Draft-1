const form = document.getElementById('contact-form');
const submit = document.getElementById('submit');

submit.addEventListener("click", function(event) {
    event.preventDefault();

    const reqNotices = document.querySelectorAll('.req-notice');
    reqNotices.forEach(element => {
        element.remove();
    });
    
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const phone = document.getElementById("phone-input").value;
    const details = document.getElementById("text-input").value;

    if (name == "") {
        document.getElementsByClassName('input-wrapper')[0].insertAdjacentHTML("beforeend", "<p style='color:#F1B821; display:block;' class='req-notice'>REQUIRED INPUT!<p>")
    } else if (email == "") {
        document.getElementsByClassName('input-wrapper')[1].insertAdjacentHTML("beforeend", "<p style='color:#F1B821; display:block;' class='req-notice'>REQUIRED INPUT!<p>")
    } else if (phone == "") {
        document.getElementsByClassName('input-wrapper')[2].insertAdjacentHTML("beforeend", "<p style='color:#F1B821; display:block;' class='req-notice'>REQUIRED INPUT!<p>")
    } else if (details == "") {
        document.getElementsByClassName('input-wrapper')[3].insertAdjacentHTML("beforeend", "<p style='color:#F1B821; display:block;' class='req-notice'>REQUIRED INPUT!<p>")
    } else {
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(details);
    }

    form.reset();

    const body = 'Hi, %0D%0A%0D%0A' + details + '%0D%0A%0D%0APhone number: ' + phone + '%0D%0A%0D%0AName: ' + name; 

    var mailtoUrl = 'mailto:' + encodeURIComponent('itsyourphotographer@dearlybelovedphotography.co.uk') +
                    '?subject=Enquiry' +
                    '&body=' + body;
    
    window.location.href = mailtoUrl; 

}); 