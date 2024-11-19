let input= document.querySelector("input")
let button = document.querySelector("button")

let aalamCrash = document.querySelector(".aalamcrushx2")

button.addEventListener("click", ()=> {
    let paragraph = document.createElement("p")
    paragraph.setAttribute("class", "aalamCrush")
    let answer = input.value.split("").reverse().join("")
    paragraph.innerHTML=answer
    aalamCrash.append(paragraph)
})


let string = document.querySelector(".arinaMOLODEZ")
let massiv = ["aalammenyazagasil", "seichasmybudemcushatshavy", "aalamlychshiimentor", "19", "11", "2024", "yaeshenihuaneznaiuJS"]


let vyvodstrock =()=> {

    massiv.forEach((item, index) => {
        let oneString = document.createElement("h3")
        oneString.innerHTML = item
        string.append(oneString)
    })
}
vyvodstrock() 



