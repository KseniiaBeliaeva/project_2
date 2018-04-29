{/* 
*/}

function modal(content) {
    var dialog = $('<div class="modal">'
        + '<div class="modal-container">'
        + '<span class="close">&times;</span>'
        + '</div>'
        + '</div>');
    
    dialog.find('.modal-container').append(content);

    var btnClose = dialog.find('.close');

    btnClose.click(close);
    dialog.click(close);

    function close(event) {
        if (event.target == dialog[0]
            || event.target == btnClose[0])
        {
            dialog.remove();
        }    
    }

    dialog.appendTo(document.body);
}
/*
var modal = document.getElementById('myModal');
(function () {
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    // btn.onclick = function () {
    //     modal.style.display = "block";
    // }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})();*/