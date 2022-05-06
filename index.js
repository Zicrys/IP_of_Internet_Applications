/************************************************************************************************************************
*
*    Практическая работа № 1 (Типы данных. Приведение типов в JS. Циклы)
*
*    0) создать переменную, узнать ее тип, добавить вывод на экран текста, в зависимости от значения (if else)
*    1) запросить у пользователя знак зодиака, и в зависимости от ответа выдать всплывающее окно приветствия 
*   (вместо знака зодиака, можно запросить другие данные, предполагающие несколько вариантов ответа) (switch)
*    2) вывести все числа от 1 до 40, с использованием 3-х разных циклов
*    3) создайте вирусную страницу с постоянно повторяющемся сообщением
*    4) Запросить у пользователя любое число больше 5, в случае правильного ответа выдать окошко с поздравлением, 
*    в случае неправильного ответа вывести повторное окно с вопросом (помните, что пользователь может нажать "отмена", 
*    помните о типах данных)
*    5) выведите четные числа от 8 до 20
*    6) выведите нечетные числа от 1 до 7, пропустив 5
*
************************************************************************************************************************/
// 0) создать переменную, узнать ее тип, добавить вывод на экран текста, в зависимости от значения (if else)
alert("Задание 1.0.");
let name = 'Anton';
alert(name);
let age = 30;
    if(typeof(age) == 'number'){
        alert(typeof(age));
    }
    else(alert('this is not number'));

// 1) запросить у пользователя знак зодиака, и в зависимости от ответа выдать всплывающее окно приветствия 
//    (вместо знака зодиака, можно запросить другие данные, предполагающие несколько вариантов ответа) (switch)
let horo = String(prompt("Задание 1.1. Введите свой знак зодиака"));
switch(horo){
    case "Овен":
        alert("Hello " + horo);
        break;
    case "Телец":
        alert("Hello " + horo);
        break;
    case "Близнецы":
        alert("Hello " + horo);
        break;
    case "Рак":
        alert("Hello " + horo);
        break;
    case "Лев":
        alert("Hello " + horo);
        break;
    case "Дева":
        alert("Hello " + horo);
        break;
    case "Весы":
        alert("Hello " + horo);
        break;
    case "Скорпион":
        alert("Hello " + horo);
        break;
    case "Стрелец":
        alert("Hello " + horo);
        break;
    case "Козерог":
        alert("Hello " + horo);
        break;
    case "Водолей":
        alert("Hello " + horo);
        break;
    case "Рыбы":
        alert("Hello " + horo);
        break;
    default:
        alert("Требуется вписать знак зодиака с большой буквы и на русском языке. Обновите страницу.");
        break;
}

// 2) вывести все числа от 1 до 40, с использованием 3-х разных циклов
document.write("Задание 1.2." + '<br>');
let x = 1;
while( x <= 40){
    document.write(x + '\t');
    ++x;
}
document.write('<br>');
let x1 = 1;
for(;x1 <= 40; ++x1){
    document.write(x1 + '\t');
}
document.write('<br>');
let x2 = 0;
do {
    ++x2;
    document.write(x2 + '\t');
} 
while(x2 < 40){
}
document.write('<br>');

// 3) создайте вирусную страницу с постоянно повторяющемся сообщением
    /*
    while(true){
        alert("ВИРУСНАЯ СТРАНИЦА!");
    }
    */
   
// 4) Запросить у пользователя любое число больше 5, в случае правильного ответа выдать окошко с поздравлением, 
//    в случае неправильного ответа вывести повторное окно с вопросом (помните, что пользователь может нажать "отмена", 
//    помните о типах данных)
nu = 0;
while(nu <= 5){
    nu = Number(prompt("Задание 1.4. Введите любое число больше 5"));
    if(nu > 5){
        alert("Поздравляю, вы выполнили задание!");
        break;
    }
    else 
        alert("ОШИБКА!");
        continue;
}

// 5) выведите четные числа от 8 до 20
document.write("Задание 1.5." + '<br>');
evenNum = 8;
for(;evenNum <= 20; evenNum++){
    if(evenNum % 2 == 0){
        document.write(evenNum + '\t');
    }
}
document.write('<br>');

// 6) выведите нечетные числа от 1 до 7, пропустив 5
document.write("Задание 1.6." + '<br>');
oddNum = 1;
for(;oddNum <= 7; oddNum++){
    if(oddNum % 2 != 0 && oddNum != 5){
        document.write(oddNum + '\t');
    }
}
document.write('<br>');

/************************************************************************************************************************
* 
*    Практическая работа № 2 (Массивы. Функции)
*
*    1) создать массив 3 разными способами
*    2) выведите на экран 5 член вашего массива затем измените его значение 
*    3) узнайте длину вашего массива и выведите ее значение при наведении на любой элемент
*    4) выведите все элементы массива, используя цикл for
*    5) создайте 2 массива. Объедините их в один и выведите на экран полученный массив
*    6) Удалите последний член получившегося массива и выведите это значение на экран
*    7) Удалите последний член получившегося массива и выведите это значение на экран
*    8) Добавьте новый элемент в начало вашего объединенного массива
*    9) Получите сегодняшнюю дату и выведите ее на экран
*    10) Выведите сегодняшнюю дату в формате 11 ноября 2020 года
*    11) напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50
*
************************************************************************************************************************/

// 1) создать массив 3 разными способами
arr = new Array();
arr[0] = "Auto";
arr[1] = "Microwave";
arr[2] = "Washing machine";
arr[3] = "Vacuum cleaner";

let arr2 = new Array("Auto", "Microwave", "Washing machine", "Vacuum cleaner", "Television", "Computer");

let arr3 = ["Auto", "Microwave", "Washing machine", "Vacuum cleaner"];

// 2) выведите на экран 5 член вашего массива затем измените его значение
document.write("Задание 2.2." + '<br>');
document.write(arr2[5] + '<br>');
arr2[5] = ["Refrigerator"];

// 3) узнайте длину вашего массива и выведите ее значение при наведении на любой элемент
document.write("Задание 2.3." + '<br>');
document.write(arr2.length + '<br>');

// 4) выведите все элементы массива, используя цикл for
document.write("Задание 2.4." + '<br>');
for(let i=0; i < arr2.length; ++i){
    document.write(arr2[i] + '\t');
}
document.write('<br>');

// 5) создайте 2 массива. Объедините их в один и выведите на экран полученный массив
document.write("Задание 2.5." + '<br>');
let arr4 = arr2.concat(arr3);
for(let i=0; i < arr4.length; ++i){
    document.write(arr4[i] + '\t');
}
document.write('<br>');

// 6) Удалите последний член получившегося массива и выведите это значение на экран
document.write("Задание 2.6." + '<br>');
arrEl = arr4.pop();
document.write(arrEl + '<br>');

// 7) Удалите последний член получившегося массива и выведите это значение на экран
document.write("Задание 2.7." + '<br>');
arrE2 = arr4.pop();
document.write(arrE2 + '<br>');

// 8) Добавьте новый элемент в начало вашего объединенного массива
document.write("Задание 2.8." + '<br>');
arr4.unshift("Monitor");

// 9) Получите сегодняшнюю дату и выведите ее на экран
document.write("Задание 2.9." + '<br>');
let nowDate = new Date();
document.write(nowDate + '<br>');

// 10) Выведите сегодняшнюю дату в формате 11 ноября 2020 года
document.write("Задание 2.10." + '<br>');
let nowDate2 = new Date();
let year = String(nowDate2.getFullYear());
let month = nowDate2.getMonth() + 1;
let day = String(nowDate2.getDate());
let monthStr = "";
switch(month){
    case 1:
        monthStr = "января";
        break;
    case 2:
        monthStr = "февраля";
        break;
    case 3:
        monthStr = "марта";
        break;
    case 4:
        monthStr = "апреля";
        break;
    case 5:
        monthStr = "мая";
        break;
    case 6:
        monthStr = "июня";
        break;
    case 7:
        monthStr = "июля";
        break;
    case 8:
        monthStr = "августа";
        break;
    case 9:
        monthStr = "сентября";
        break;
    case 10:
        monthStr = "октября";
        break;
    case 11:
        monthStr = "ноября";
        break;
    case 12:
        monthStr = "декабря";
        break;
}
if(day < 10){
    document.write('0' + day + ' ' + monthStr + ' ' + year + ' года');
}
document.write('<br>');

// 11) напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50
function prodRandomNum(min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}
document.write(prodRandomNum(0, 50));
