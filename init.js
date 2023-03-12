document.querySelector('#generation').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.querySelector('.card-title').classList.remove('hidden');
    document.querySelector('#surnameOutput').classList.remove('hidden');
    document.querySelector('#firstNameOutput').classList.remove('hidden');
    document.querySelector('#patronymicOutput').classList.remove('hidden');
    document.querySelector('#genderOutput').classList.remove('hidden');
    document.querySelector('#birthDayOutput').classList.remove('hidden');
    document.querySelector('#birthMonthOutput').classList.remove('hidden');
    document.querySelector('#birthYearOutput').classList.remove('hidden');
    document.querySelector('#professionOutput').classList.remove('hidden');
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthDayOutput').innerText = initPerson.day;
    document.querySelector('#birthMonthOutput').innerText = initPerson.month;
    document.querySelector('#birthYearOutput').innerText = initPerson.year;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
});

document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('#surnameOutput').innerText = 'Фамилия';
    document.querySelector('#firstNameOutput').innerText = 'Имя';
    document.querySelector('#patronymicOutput').innerText = 'Отчество';
    document.querySelector('#genderOutput').innerText = 'пол, ';
    document.querySelector('#birthDayOutput').innerText = '(Число, ';
    document.querySelector('#birthMonthOutput').innerText = 'месяц, ';
    document.querySelector('#birthYearOutput').innerText = 'год рождения)';
    document.querySelector('#professionOutput').innerText = 'профессия';
}
);