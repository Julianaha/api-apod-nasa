let obj = {};
const texto = $('.texto');

$('#btn').click(function (e) {
    e.preventDefault();
    let data = $('#data').val();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=d7nsRkq8FvACVzcgqGQjjfp5l1T6G1WhbNjfNuxG&date=${data}`,
        type: 'GET',
        success: function (requisicao) {
            obj = requisicao;
            selecionaTipo(obj)
            texto.text(obj.explanation)
        },

        error: function () {
            $('#msg-erro').html('<p style="font-size:300%; text-align:center; color:#fb3d22">Veririfique a data selecionada e tente novamente!</p>');
        }
    })
})

function selecionaTipo(obj) {

    if (obj.media_type === 'image') {
        $('#img').attr('src', obj.url),
        $('#img').css('display', 'flex'),
        $('#video').css('display', 'none')
    } else {
        $('#img').attr('src', obj.url),
        $('#img').css('display', 'none'),
        $('#video').attr('src', obj.url),
        $('#video').css('display', 'flex')
    }
}


