let errorVisible = false;

function pressButton(value) {

    let status = document.getElementById("status");

    // Если сообщение уже показано — делаем эффект "перезагрузки"
    if (errorVisible) {

        status.style.visibility = "hidden";

        setTimeout(function() {
            status.style.visibility = "visible";
        }, 100);

        return;
    }


    // Первое нажатие — показываем ошибку
    status.style.visibility = "visible";
    errorVisible = true;
}
