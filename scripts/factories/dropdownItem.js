function dropdownItemFactory (name) {

    function createDropdownItem() {
       const li = document.createElement('li')
       li.className = "dropdown_li"
       li.innerHTML = `
        <button class="dropdown_item">
            ${name}
        </button>
        `

        return li
    }

    function createTag() {
        const div = document.createElement('div')
        div.className = 'tag'
        div.innerHTML = `
        <p class="tag_name"> ${name} </p>
        <button> <i class=" tag_solid fa-regular fa-circle-xmark"></i> </button>
        `

        return div
    }

    return { createDropdownItem, createTag }
}