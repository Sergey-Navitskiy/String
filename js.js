"use strict";

/*
ЗАДАЧИ:

Создайте программу которая будет преобразовывать переменные слова в которых разделены нижним тире, в переменные которые будут записанны в camelCase нотации.
/////////
*/

document.querySelector('.btn').addEventListener('click',function(){
    const text = document.querySelector('.text').value;
    const rows = text.split('\n');
    let output = []
    for( let row of rows) {
        const [first, second] = row.trim().toLowerCase().split('_')
        output.push(`${first}${second.replace(second[0], second[0].toUpperCase())}`)
    }
    document.querySelector('.output').innerText = output.join('\n')
})