'use strict'
const payRate = 170.93

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

function calcMoney(){
    let num1 = parseInt(value1.value)
    
    
    let sum = num1 * payRate
    let zonalnaya = sum + (sum *= 0.15)
    let classQuality = zonalnaya + (zonalnaya *= 0.05) 
    let generalSum = classQuality
    result.innerText = `Результат: ${generalSum.toFixed(2)}`
}




// Добавление маршрутных листов
let dateBeginning = document.querySelector('.beginning')
let dateEndOfWork = document.querySelector('.endOfWork')
let numberTrain = document.querySelector('.numberTrain')
let dateBtn = document.querySelector('.testBtn')
let span = document.querySelector('.test')
let tbody = document.querySelector('.table');

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
    let dateGen =   Date.parse(dateEnd) - Date.parse(date)
    let timeWork = dateGen / 3600000
    // localStorage.setItem('date', date)
    // localStorage.setItem('dateEnd', dateEnd)
    // localStorage.setItem('numTrain', numTrain)
    // localStorage.setItem('timeWork', timeWork)
    
    
        // localStorage.getItem('date')
        // localStorage.getItem('dateEnd')
        // localStorage.getItem('numTrain')
        // localStorage.getItem('timeWork')

    
    
    
    span.innerText =  timeWork.toFixed(2)
    let tbody = document.querySelector('.table');
    let template = `<tr class='table__content' data-id='${localStorage.length}'>
    <td>${numTrain}</td>
    <td>${date}</td>
    <td>${dateEnd}</td>
    <td>${timeWork}</td>
    <td><button class='close'>x</button></td>
    </tr>`
    template = [template]
    template.reverse()
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
// let row = document.createElement('tr')
// let td1 = document.createElement('td')
// let td2 = document.createElement('td')
// let td3 = document.createElement('td')
// let td4 = document.createElement('td')
// td1.appendChild(document.createTextNode(numTrain))
// td2.appendChild(document.createTextNode(date))
// td3.appendChild(document.createTextNode(dateEnd))
// td4.appendChild(document.createTextNode(timeWork))
// row.appendChild(td1)
// row.appendChild(td2)
// row.appendChild(td3)
// row.appendChild(td4)
// tbody.appendChild(row)
}) 







// let getDateBeginning = () => {
//     let date = dateBeginning.value
//     span.innerText = date
//     console.log(date)
// }
// getDateBeginning()

let drivers = ['Иван', 'Сергей', 'Егор',]

for (let i = drivers.length - 1; i >= 0 ; i--) {
    console.log (drivers[i])
}