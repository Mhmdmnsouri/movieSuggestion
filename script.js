const aloneBtnElem = document.getElementById("aloneBtn");
const someoneBtnElem = document.getElementById("someoneBtn");
const adminBtnElem = document.getElementById("adminBtn");

function chooseItem(itemChosen) {
    console.log(itemChosen);
    if (itemChosen == 'alone') {
        someoneBtnElem.style.display = 'none';
        adminBtnElem.style.display = 'none';
        aloneBtnElem.className += (" mobileAloneItem");
        aloneBtnElem.style.color = ("blue");

    }
    else if (itemChosen == 'someone') {
        aloneBtnElem.style.display = 'none';
        adminBtnElem.style.display = 'none';
        someoneBtnElem.className += (" mobileSomeoneItem");
        someoneBtnElem.style.color = ("blue");

    }
    else if (itemChosen == 'admin') {
        someoneBtnElem.style.display = 'none';
        aloneBtnElem.style.display = 'none';
        adminBtnElem.className += (" mobileAdminItem");
        adminBtnElem.style.color = ("blue");

    }
}
