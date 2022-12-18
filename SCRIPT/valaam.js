function show (name)
{
    var elem = document.getElementById(name).style.display='block';
}
function shownt (name)
{
    var elem = document.getElementById(name).style.display='none';
}
function check ()
{
    if (otvet.answer.value=="Сортавала")
        alert("Правильно!");
    else
        alert("Неправильно!")
}
