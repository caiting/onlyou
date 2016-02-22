$(function () {

    // 查询所有分类
    $.ajax({
        url: '/api/category/feedbackCount',
        method: 'get',
        dataType: 'json',
        success: function (result) {
            if (result.status == 'success') {
                var lables = '';
                $.each(result.data, function (i, dt) {
                    lables += '<button data-id="' + dt._id + '">' + dt.name + '</button>';
                });
                $('#labels').append(lables);
            }
        }
    });

    // 添加分类
    $('#add_category').click(function () {
        var name = $('#category').val();
        if (name != '') {
            $.post('/api/category/add', {name: name}, function (result) {
                console.log(result);
            })
        }
    });

    //显示插叙结果
    function showFeedback(data) {
        var trs = '';
        $.each(data, function (i, dt) {
            var tr = '<tr>';
            tr += '<td>' + (i + 1) + '</td>';
            tr += '<td>' + dt.text + '</td>'
            tr += '<td>' + dt.ip + '</td>'
            tr += '<td>' + new Date(dt.create_date).toLocaleString() + '</td>';
            tr += '</tr>';

            trs += tr;
        });
        $('#feedback_table').html(trs);
    }

    //查询所有反馈意见
    function queryAll() {
        $.get('/api/feedback/find', function (result) {
            showFeedback(result.data);
        });
    }

    queryAll();

    // 根据分类查询意见反馈
    $('#labels').on('click', 'button', function () {
        var category = $(this).attr('data-id');
        if (category == '') {
            queryAll();
        } else {
            $.get('/api/feedback/findByCategory?category=' + category, function (result) {
                showFeedback(result.data);
            });
        }
    });


});