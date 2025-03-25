$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('select').formSelect();
    $('.slider').slider();

    emailjs.init('HB27QC27vArtxT4Dz');

    var formMsg = $('#formMsg');

    formMsg.on('submit', function (e) {
        e.preventDefault();

        let nombre = $('#inputName').val();
        let apellido = $('#inputLastName').val();
        let email = $('#inputEmail').val();
        let nroPais = $('#inputCountry').val();
        let telefono = $('#inputNumberPhone').val();
        let mensaje = $('#txaMessage').val();

        enviarCorreo(nombre, apellido, email, nroPais, telefono, mensaje);

        this.reset();
    });

    function enviarCorreo(nombre, apellido, email, nroPais, telefono, mensaje) {
        var templateParams = {
            to_name: `${nombre} ${apellido}`,
            from_name: "Natsol",
            user_email: email,
            user_phone: `${nroPais} ${telefono}`,
            user_message: mensaje
        };

        const serviceID = 'default_service';
        const templateID = 'template_ni08eml';

        emailjs.send(serviceID, templateID, templateParams)
            .then(function (response) {
                console.log("Correo enviado con éxito", response);

                M.toast({ html: 'Correo enviado con éxito', classes: 'rounded' });
            }, function (error) {
                console.log("Error al enviar el correo", error);
            });
    }
});
