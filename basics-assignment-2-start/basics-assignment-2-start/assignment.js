const task3Element = document.getElementById('task-3');


function greeting()
{
    alert("Bye Bye Policia");
}

function greeting2(input)
{
    alert(input);
}

function greetingFamily(father,mother,son)
{
    alert(`${father} and ${mother} love ${son}`);
}

greeting();
greeting2("Joel");
greetingFamily("Joel","Aneiry","Adrian");

task3Element.addEventListener("click",greeting);
