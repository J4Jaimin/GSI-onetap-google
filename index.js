const clientId = 'xyz' // your client id;

window.onload = function () {
    google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
            console.log(response);
        }
    });
    google.accounts.id.prompt();
    google.accounts.id.renderButton(document.getElementById('google-login'), {})
};