$(document).ready(function(){
    $("a[name='cutr']").click(function(){
        $("#t_login").hide();
        $("#t_register").show();
        $("input").not(this).css("border-color","#d8d8d8");
        $("input").not(this).attr("value","");
    })
    $("a[name='cutl']").click(function(){
        $("#t_login").show();
        $("#t_register").hide();
        $("input").not(this).css("border-color","#d8d8d8");
        $("input").not(this).attr("value","");
    })
    $("input").click(function(){
        $(this).css("border-color","orange");
        $("input").not(this).css("border-color","#d8d8d8");
    })
    $("#pwd2").change(function(){
        if($("#pwd").val()!=$(this).val()){
            alert(1);
        }
    })
})



