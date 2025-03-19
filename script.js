document.addEventListener('DOMContentLoaded', function () {
    const dateInputs = document.querySelectorAll('.input_text[data-placeholder]');
    dateInputs.forEach(input => {
        const placeholder = input.getAttribute('data-placeholder');
        flatpickr(input, {
            dateFormat: "Y-m-d",
            placeholder: placeholder,
            onChange: function (selectedDates, dateStr, instance) {

            },
            onClose: function (selectedDates, dateStr, instance) {
                if (!dateStr) {
                    instance.element.value = '';
                    instance.element.placeholder = instance.element.getAttribute('data-placeholder');
                }
            }
        });
        input.placeholder = placeholder;

    });

    const calendarIcons = document.querySelectorAll('.calendar-icon, .calendar-icon2');

    calendarIcons.forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.preventDefault();
            const dateInputId = this.dataset.dateInputId;
            const dateInput = document.getElementById(dateInputId);
            if (dateInput) {
                dateInput.focus();
                dateInput.click();
            }
        });
    });
});
const archiveCheckbox = document.getElementById('archive_checkbox');

archiveCheckbox.addEventListener('change', function () {
    if (this.checked) {
        console.log('Checkbox is checked.  Showing archived trips (or whatever action you need).');

    } else {

        console.log('Checkbox is unchecked.  Hiding archived trips.');

    }
});
const travelData = [
    {
        tripNumber: "000115",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы",
        statusUser: "Ksenya"
    },
    {
        tripNumber: "000117",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва",
        status: "Документы"
    },
    {
        tripNumber: "000074",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Кременчуг-Константиновское, Петропавловск-Камчатский, Новосибирск, Волгоград...,",
        status: "Документы",
        statusUser: "илья"
    },
    {
        tripNumber: "000115",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы"
    },
    {
        tripNumber: "000211",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы"
    },
    {
        tripNumber: "000118",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы",
        statusUser: "владимир андреев"
    },  {
        tripNumber: "000118",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы",
        statusUser: "владимир андреев"
    },  {
        tripNumber: "000118",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы",
        statusUser: "владимир андреев"
    },  {
        tripNumber: "000118",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы",
        statusUser: "владимир андреев"
    },
    {
        tripNumber: "000119",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы"
    },
    {
        tripNumber: "000120",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы"
    },
    {
        tripNumber: "000133",
        tripDate: "22.02.2024 - 27.02.2024",
        plannedAmount: "29 400,00",
        actualAmount: "29 400,00",
        city: "Москва, Ярославль, Ижевск, Владимир",
        status: "Документы"
    }
];

const titleTable = [{
    id: 1,
    nom: "№ поездки",
    data: "Дата поездки",
    sum_plan: "Сумма, план",
    sum_fact: "Сумма, факт",
    city: "Город",
    status: "Статус"

}];


