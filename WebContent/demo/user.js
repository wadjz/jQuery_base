$(function(){
    // 添加(提交)
    $("#addUser").click(function() {
        var $name = $("#name").val();
        var $email = $("#email").val();
        var $tel = $("#tel").val();
        
        var $checkbox = $("input/").attr("type","type");
        var $checkboxTD = $("<td/>").append($checkbox);
        
        var $nameTD = $("<td/>").text(name);
        var $emailTD = $("<td/>").text(email);
        var $phoneTD = $("<td/>").text(tel);
        var $updateA = $("<a/>").text("修改");
        $updateA.css("cursor","pointer");
        var $deteleA = $("<a/>").text("删除");
        $deteleA.css("cursor","pointer");
        
        $("table tbody").append()
        
    });
});
