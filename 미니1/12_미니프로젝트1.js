const form = document.getElementById("form")

form.addEventListener("submit", function(e){
    e.preventDefault();

    let userID = e.target.id.value
    let userPw1 = e.target.pass1.value
    let userPw2 = e.target.pass2.value
    let userName = e.target.name.value
    let userPhone = e.target.phone.value
    let userPosition = e.target.position.value
    let userEmail = e.target.email.value
    let userInfo = e.target.info.value

    console.log(userID, userPw1, userPw2,
        userName, userPhone, userPosition, userEmail, userInfo)

    if(userID.length < 6){
        alert("길이가 짧습니다. 6자 이상 입력해주세요.")
        return;
    }
    if(userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다.")
        return;
    }

    document.body.innerHTML = ""
    document.write(`${userID}님 환영합니다.`)

})