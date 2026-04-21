function showAnswer(text) {
    document.getElementById("modalText").innerText = text;

    const modal = new bootstrap.Modal(
        document.getElementById('answerModal')
    );

    modal.show();
}
