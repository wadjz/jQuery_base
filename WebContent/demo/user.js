$(function(){
    var index = 1;
    // 添加(提交)
    $("#addUser").click(function() {
        var $name = $("#name").val();
        var $email = $("#email").val();
        var $tel = $("#tel").val();
        
        var $checkbox = $("<input/>").attr("type","checkbox");
        var $checkboxTD = $("<td/>").append($checkbox);
        $checkboxTD.attr("id", index);
        index++;
        
        var $nameTD = $("<td/>").text($name);
        var $emailTD = $("<td/>").text($email);
        var $phoneTD = $("<td/>").text($tel);
        
        var $updateA = $("<a/>").text("修改");
        $updateA.css("cursor","pointer");
        $updateA.click(function(){
            var id = $(this).parent().siblings("td:eq(0)").attr("id");
            var name = $(this).parent().siblings("td:eq(1)").text();
            var email = $(this).parent().siblings("td:eq(2)").text();
            var phone = $(this).parent().siblings("td:eq(3)").text();
            
            $("#name_update").val(name);
            $("#email_update").val(email);
            $("#tel_update").val(phone);
            $("#id_update").val(id);
        });
        
        var $updateTD = $("<td/>").append($updateA);
        
        var $deteleA = $("<a/>").text("删除");
        $deteleA.css("cursor","pointer");
        $deteleA.click(function(){  // 删除本行
            if(window.confirm('确定要删除此行吗？'))
            {
                $(this).parent().parent().remove();
            }
        });
        
        var $deteleTD = $("<td/>").append($deteleA);
        
        var $tr = $("<tr/>").append($checkboxTD)
                            .append($nameTD)
                            .append($emailTD)
                            .append($phoneTD)
                            .append($deteleTD)
                            .append($updateTD);
                            
        $("tbody").append($tr);
    });
    
    // 完成批量删除
    $("#deleteUser").click(function() {
        if(window.confirm('确定要删除吗？'))
        {
            $(":checkbox:not(#allCheckbox):checked").parent().parent().remove();
        }
    });
    
    // 全选
    $("#allCheckbox").click(function() {
        $(":checkbox:not(#allCheckbox)").attr("checked", $(this).attr('checked'));
    });
    
    // 修改(提交)
    $("#updateUser").click(function() {
        var idValue = $("#id_update").val();
        $("td[id='"  + idValue + "']").siblings("td:eq(0)").text($("#name_update").val());
        $("td[id='"  + idValue + "']").siblings("td:eq(1)").text($("#email_update").val());
        $("td[id='"  + idValue + "']").siblings("td:eq(2)").text($("#tel_update").val());
    });
    
});
