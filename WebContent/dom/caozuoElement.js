$(function(){
    // 添加 <li>到ui的后面
    $("input[type='button'][value='添加']").click(function() {
        var $li = $("<li/>").attr("name","shanghai").text("上海");
        $("ul").append($li);
    });
    
    // 移除
    $("input[type='button'][value='移除']").click(function() {
        $("ul li:last").remove();
    });
    
    // 替换
    $("input[type='button'][value='替换']").click(function() {
        var $ol = $("<ol/>");
        $("ul li").each(function(index) {
          $ol.append("<li>" + $(this).text() + "</li>");
        });
        $("ul").replaceWith($ol);
    });
});
