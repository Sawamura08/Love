var buttons = document.getElementsByClassName("btn");
var codes = document.getElementsByClassName("code");
var deletePass = document.querySelector(".delete");
var hint = document.querySelector(".hint-text");

let password = "";
let numberOfInput = 0;
for (let btn of buttons) {
  btn.addEventListener("click", (e) => {
    if (numberOfInput < 4) {
      password += e.target.value;
      numberOfInput++;
      changePasscodeDesign();

      if (numberOfInput === 4) {
        checkPassword();
      }
    }
  });
}

const checkPassword = () => {
  if (password === "1024") {
    window.location.replace("home.html");
  } else {
    resetPassword();
    hint.style.display = "block";
  }
};

const resetPassword = () => {
  numberOfInput = 0;
  password = "";

  for (let code of codes) {
    code.style.background = "transparent";
  }
};

const changePasscodeDesign = () => {
  for (let i = 0; i < numberOfInput; i++) {
    codes[i].style.background = "white";
  }
};

const deletePasscode = () => {
  const removePass = numberOfInput;
  codes[removePass].style.background = "transparent";
};

deletePass.addEventListener("click", (e) => {
  if (numberOfInput != 0) {
    numberOfInput--;
    const passwordArr = password.split("");
    passwordArr.pop();
    password = passwordArr.join("");

    deletePasscode();
  }
});
