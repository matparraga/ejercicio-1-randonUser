

const btn1 = document.getElementById("btn-1")

const userName = document.querySelector(".header__username a")


async function getUsers() {
    try {
        const users = await (await fetch('https://randomuser.me/api/')).json()
        const dataUser = users.results[0]
        console.log(dataUser)

        userName.innerHTML = dataUser.name.first + " " + dataUser.name.last;



        document.querySelector("#user-1 img").src = dataUser.picture.large;



        document.querySelector("#user-1 .pais")
            .innerHTML = "Pais: " + dataUser.location.country;

        document.querySelector("#user-1 h2")
            .innerHTML = dataUser.name.first + " " + dataUser.name.last;

        document.querySelector("#user-1 .ciudad")
            .innerHTML = "Ciudad: " + dataUser.location.city;

        document.querySelector("#user-1 .edad")
            .innerHTML = "Edad: " + dataUser.registered.age;


        document.querySelector("#user-1 .celular")
            .innerHTML = "Celular: " + dataUser.cell;

    } catch (error) {
        console.log(error)
    }
}




btn1.addEventListener('click', function () {
    getUsers()
});