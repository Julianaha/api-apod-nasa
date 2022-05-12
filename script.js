let obj = {};

$('#btn').click(function (e) {
    e.preventDefault();
    let data = $('#data').val();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=d7nsRkq8FvACVzcgqGQjjfp5l1T6G1WhbNjfNuxG&date=${data}`,
        type: 'GET',
        success: function (requisicao) {
            obj = requisicao
            selecionaTipo(obj)
        }
    })
})

function selecionaTipo(obj) {
    if (obj.media_type === 'image') {
        $('#img').attr('src', obj.url),
            $('#img').css('display', 'inline'),
            $('#video').css('display', 'none')
    } else {
        $('#img').attr('src', obj.url),
            $('#img').css('display', 'none'),
            $('#video').attr('src', obj.url),
            $('#video').css('display', 'inline')
    }
}

