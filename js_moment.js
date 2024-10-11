
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bouton1').addEventListener('click', function() {
        document.getElementById('dialog1').showModal();
    });

    document.getElementById('closeDialog').addEventListener('click', function() {
        document.getElementById('dialog1').close();
    });
});