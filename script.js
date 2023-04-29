const inputName = document.querySelector('.inputName');
const nameResult = document.querySelector('.name');
const genderImage = document.querySelector('.genderImage');
const genderResult = document.querySelector('.gender');
const probabilityResult = document.querySelector('.probability');
const btn = document.querySelector('.searchBtn')

btn.addEventListener('click',()=> {
    getGender()
})





function getGender() {
    let name = inputName.value;
    // Check for input
    if(name === "") {
        alert('Enter a name')
        return false
    }

    //Fetch DAta

    let url = `https://api.genderize.io?name=${name}`
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Create Variables
        const name = data['name']
        const gender = data['gender']
        const probability = data['probability']



        // Set Data
        nameResult.textContent = name
        genderResult.textContent = `You are ${gender}`

        if(gender === "male") {
            genderImage.src = '/images/male-gender.png'
        }
        else if(gender === "female") {
            genderImage.src = '/images/female.png'
        }
        else {
            genderImage.style.display = 'none'
        }



        console.log(name);
        console.log(gender);
        console.log(probability);
    })

}