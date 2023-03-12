const mon = Math.floor(Math.random() * 3);

const personGenerator = {
    surnameJson: `{  
        "count": 14,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Степанов",
            "id_13": "Павлов",
            "id_14": "Александров"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Владимиров",
            "id_2": "Алексеев",
            "id_3": "Сергеев",
            "id_4": "Петров",
            "id_5": "Андреев",
            "id_6": "Михайлов",
            "id_7": "Иванов",
            "id_8": "Александров",
            "id_9": "Анатольев",
            "id_10": "Петров"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Лариса",
            "id_3": "Галина",
            "id_4": "Людмилла",
            "id_5": "Екатерина",
            "id_6": "Оксана",
            "id_7": "Анастасия",
            "id_8": "Евгения",
            "id_9": "Валерия",
            "id_10": "София"
        }
    }`,
    
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "строитель",
            "id_2": "шахтер",
            "id_3": "водитель",
            "id_4": "автомеханик",
            "id_5": "слесарь",
            "id_6": "сварщик",
            "id_7": "охранник",
            "id_8": "сантехник",
            "id_9": "инженер",
            "id_10": "пилот"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "косметолог",
            "id_2": "воспитатель",
            "id_3": "швея",
            "id_4": "флорист",
            "id_5": "бухгалтер",
            "id_6": "няня",
            "id_7": "стюардесса",
            "id_8": "горничная",
            "id_9": "секретарь",
            "id_10": "стилист"
        }
    }`,

    GENDER_MALE: 'мужчина,',
    GENDER_FEMALE: 'женщина,',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'мужчина,') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function() {
        if (this.person.gender == 'мужчина,') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "a";
        }
    },

    randomPatronymicName: function() {
        if (this.person.gender == 'мужчина,') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },
    
    randomMonth31: function () {
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function () {
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function () {
		let month = `февраля`
		return month;
	},

    randomYear: function() {
        return this.randomIntNumber(1970, 1995) + " г.р.)";
    },

    randomProfession: function() {
        if (this.person.gender == 'мужчина,') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymicName();
        this.person.profession = this.randomProfession();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = "(" + this.randomIntNumber(1, 31); 
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = "(" + this.randomIntNumber(1, 30); 
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = "(" + this.randomIntNumber(1, 28);
        }
        this.person.year = this.randomYear(1970, 1995);
        return this.person;
    }
};