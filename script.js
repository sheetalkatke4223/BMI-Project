$(document).ready(function () {
    $('#bmi').submit(function (e) {
        e.preventDefault();
        let weight = $('#weight').val();
        let height = $('#height').val();
        height = height * height;

        let answer = weight / height;
        answer = answer.toFixed(2);

        $('#value').html(answer);

    });

    $('#reset').click(function () {
        $('#weight').val("");
        $('#height').val("");

        $('#value').html("0.00");
    });
});