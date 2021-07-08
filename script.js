$(document).ready(function(){
    $("#submit2").click(function(){
        var name=$("#name").val();
        var password=$("#password").val();
        var password_2=$("#password_2").val();
        var email=$("#email").val();
        if(name==""){
            alert("Введите ваше имя")
        }
        else if(password==""){
            alert("Введите ваш пароль")
        }
        else if(password_2==""){
            alert("Повторите пароль")
        }
        else if(password!=password_2){
            alert("Введенные пароли не совпадают")
        }
        else if(password.length<6){
            alert("Пароль должен быть не меньше 6 символов")
        }
        else if(email==""){
            alert("Введите ваш E-mail")
        }else{
            alert("Регистрация прошла успешно");
            document.location.href = "index.html"
        }
    });
    
});