// INIT
emailjs.init({
    publicKey: "2JUeGqMhK9uykWuEA",
  })


window.onload = function() {
    document.querySelector('#contact-email').addEventListener('submit', function(event) {
        event.preventDefault()
        const templateId = 'template_f8r0p2s'
        const serviceId = 'service_csuifkt'
        // these IDs from the previous steps
        emailjs.sendForm(serviceId, templateId, this)
            .then(() => {
                console.log('SUCCESS')
            }, (error) => {
                console.log('FAILED', error)
            })
    })
}