let payRate = 193.42

// Добавление маршрутных листов
const dateBeginning = document.querySelector('.beginning')
const dateEndOfWork = document.querySelector('.endOfWork')
const numberTrain = document.querySelector('.numberTrain')
const dateBtn = document.querySelector('.testBtn')
const span = document.querySelector('.test')
const tbody = document.querySelector('.table');
// Общая информация
const genInfo = document.querySelector('.card__text')

// Общее количество часов
let value1 = document.querySelector('.value1')
// let value2 = document.querySelector('.value2')
let valueSum = document.querySelector('.valueSum')

// *** Колличество отработанных часов + район коэф
let result = document.querySelector('.result')
result.innerText = ''

valueSum.addEventListener('click', calcMoney) //{
// let num1 = parseInt(value1.value)

// let sum = num1 * payRate
// let generalSum = sum + (sum*= 0.15)

// result.innerText = `Результат: ${generalSum}`
// })

function calcMoney() {
    let num1 = parseInt(value1.value)

    let sum = num1 * payRate
    let zonalnaya = sum + (sum *= 0.15)
    let classQuality = zonalnaya + (zonalnaya *= 0.05)
    let generalSum = classQuality
    result.innerText = `Результат: ${generalSum.toFixed(2)}`
}

if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let template = `${localStorage.getItem(key)}`
        tbody.insertAdjacentHTML('afterbegin', template)
    }



    document.querySelectorAll('.close').forEach(b => {
        b.addEventListener('click', () => {
            let item = document.querySelector('.table__content')
            item.parentNode.removeChild(item)
            localStorage.removeItem(`${item.dataset.id}`)
        })
    })
}

dateBtn.addEventListener('click', function () {
    let date = dateBeginning.value
    let dateEnd = dateEndOfWork.value;
    let numTrain = numberTrain.value
    let dateGen = Date.parse(dateEnd) - Date.parse(date)
    let timeWork = dateGen / 3600000

    let template = `<tr class='table__content' data-id='${localStorage.length}'>
    <td>${numTrain}</td>
    <td>${date}</td>
    <td>${dateEnd}</td>
    <td class="table__timework__item">${timeWork.toFixed(2)}</td>
    <td><button class='close'>x</button></td>
    </tr>`

    tbody.insertAdjacentHTML('afterbegin', template)
    localStorage.setItem(`${localStorage.length}`, template)
    dateBeginning.value = ''
    dateEndOfWork.value = ''
    numberTrain.value = ''

    document.querySelector('.close').addEventListener('click', () => {
        let item = document.querySelector('.table__content')
        item.parentNode.removeChild(item)
        localStorage.removeItem(`${item.dataset.id}`)
    })
})