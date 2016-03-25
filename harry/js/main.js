//function head(url,id){
//    $.ajax({
//        url:url,
//        dataType: 'html',
//        success: function(result){
//            console.log(result);
//            id.before(result);
//        }
//    })
//
//}
//head('./head-left.html',$('#bb'));

$('#bb').load("./head-left.html");
var email = $('#inputEmail3').val();
var password = $('#inputPassword3').val();
var radio = $("input:radio");

$('.form-horizontal').on('click', ':submit', function (e) {
    e.preventDefault();


    $.get('./jason.json', {email: email, password: password}, function (result) {
        email = result.email;
        $('#inputEmail3').val(email);
        var check = result.checkbox;
        var duo = $("input:checkbox");

        for (var i in check) {
            var dd = $(duo[i]).val();
            console.log(i);
            if (dd == check[i]) {
                $(duo).attr("checked", 'checked');
            }
        }
        for (var i = 0; i < radio.length; i++) {
            var aa = $(radio[i]).val();
            if (aa == result.radio) {
                $(radio).attr("checked", 'checked');
            }
        }
        if (email == result.email && password == result.password) {
            alert('11');
        } else {
            alert('错误');
        }

    });
})

$.get('./jason.json', {email: email, password: password}, function (result) {
    email = result.email;
    $('#inputEmail3').val(email);
    var check = result.checkbox;
    var duo = $("input:checkbox");
    duo.each(function () {
        var cbox = $(this);
        for (var i in check) {
            var value = check[i];
            if (cbox.val() == value) {
                cbox.attr("checked", 'checked');
            }
        }
    });
});




