

let age = prompt('Enter age please');
if (age >= 0 && age <= 8) {
    document.write('baby');
}
else
    if (age > 8 && age <= 30) {
        document.write('young');
    }
    else
        if (age > 30) {
            document.write('old man');
        }
        else
            if (age < 0) {
                document.write('Eroor Value Enter');
            }

let date = new Date();

let time = date.toLocaleTimeString('ar-JO', { hour12: true });
alert(time);
day = date.toLocaleDateString('ar-JO', { weekday: 'long' });
alert(day);
switch(day)
{
    case "الأحد":
    console.log('بداية الاسبوع ');
}

