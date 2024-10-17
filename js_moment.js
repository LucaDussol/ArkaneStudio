
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bouton1').addEventListener('click', function() {
        document.getElementById('dialog1').showModal();
    });
    document.getElementById('bouton2').addEventListener('click', function() {
        document.getElementById('dialog2').showModal();
    });
    document.getElementById('bouton3').addEventListener('click', function() {
        document.getElementById('dialog3').showModal();
    });
    document.getElementById('bouton4').addEventListener('click', function() {
        document.getElementById('dialog4').showModal();
    });

    document.getElementById('closeDialog1').addEventListener('click', function() {
        document.getElementById('dialog1').close();
    });
    document.getElementById('closeDialog2').addEventListener('click', function() {
        document.getElementById('dialog2').close();
    });
    document.getElementById('closeDialog3').addEventListener('click', function() {
        document.getElementById('dialog3').close();
    });
    document.getElementById('closeDialog4').addEventListener('click', function() {
        document.getElementById('dialog4').close();
    });
});