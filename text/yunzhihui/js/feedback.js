$(function () {

    $.ajax({
        url: '/api/category/find',
        method: 'get',
        dataType: 'json',
        success: function (result) {
            if (result.status == 'success') {
                var opts = '';
                $.each(result.data, function (i, dt) {
                    opts += '<option value="' + dt._id + '">' + dt.name + '</option>';
                });
                $('#category').append(opts);
            }
        }
    });

    /**
     * 添加反馈
     */


    $('#feedback').submit(function () {

        var feedback = {
            text: $.trim($('#feedback_text').val()),
            category: $.trim($('#category').val())
        };

        $.ajax({
            url: '/api/feedback/add',
            method: 'POST',
            dataType: 'json',
            data: feedback,
            success: function (result) {
                if (result.status == 'error') {
                    $('#tip').text(result.msg).show();
                } else {
                    $('#feedback')[0].reset();
                }
            }
        });

        return false;
    });


});