const dropdownBtn = document.querySelectorAll('.dropdown_btn')
dropdownIcon = document.querySelectorAll('.dropdown_icon')
const dropdownGroup = document.querySelectorAll('.dropdown_group')

dropdownBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        dropdownGroup.forEach(group => {
            group.classList.remove('dropdown_active')
        })
        dropdownGroup[index].classList.add('dropdown_active')
    })
})

dropdownIcon.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        dropdownGroup[index].classList.remove('dropdown_active')
    })
})