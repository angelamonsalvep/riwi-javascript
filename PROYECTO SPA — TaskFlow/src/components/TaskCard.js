export function TaskCard(element) {
    return `
        <div data-id=${element.id} class="dark:bg-gray-700  flex items-center justify-between border rounded p-4 m-2">
            <input ${element.state ? "checked" : ""} data-id=${element.id} class="h-5 w-5" id="taskState" type="checkbox"/>
            <div class="w-[40%]">
                <p>${element.name}</p>
                <p class="${element.state ? "text-green-500" : "text-red-500"}">${element.state ? "Completado" : "No completado"} </p>
            </div>
            <span data-id=${element.id} class="text-red-500 cursor-pointer material-symbols-outlined">
            delete
            </span>
        </div>`
}
