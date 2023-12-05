document.addEventListener('DOMContentLoaded', (event) => {
    const minusButton = document.querySelector('.minus');
    const plusButton = document.querySelector('.plus');
    const numberElement = document.querySelector('.number');
    getlocalStorage(numberElement);
    minusButton.addEventListener('click', () => {
        if (parseInt(numberElement.textContent) > 0) {
            numberElement.textContent = parseInt(numberElement.textContent) - 1;
            setlocalStorage(numberElement.textContent);
        }
    });

    plusButton.addEventListener('click', () => {
        if (parseInt(numberElement.textContent) < 100000) {
            numberElement.textContent = parseInt(numberElement.textContent) + 1;
            setlocalStorage(numberElement.textContent);
        }
    });

    // Info Modal logic
    var openModalBtn = document.getElementById('bell-icon');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var modal = document.getElementById('myModal');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });


    // Reset Modal logic
    var openResetModal = document.getElementById('filter-icon');
    var resetModal = document.getElementById('resetModal');
    openResetModal.addEventListener('click', function () {
        resetModal.style.display = 'block';
    });

    var cancelModalBtn = document.getElementById('cancelModalBtn');
    cancelModalBtn.addEventListener('click', function () {
        resetModal.style.display = 'none';
    });


    var resetModalBtn = document.getElementById('resetModalBtn');
    resetModalBtn.addEventListener('click', function () {
        setlocalStorage(0);
        numberElement.textContent = 0;
        resetModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === resetModal) {
            resetModal.style.display = 'none';
        }
    });


    //Setting Modal logic
    var settingIcon = document.getElementById('setting-icon');
    var settingModal = document.getElementById('settingModal');
    settingIcon.addEventListener('click', function () {
        settingModal.style.display = 'block';
    });

    window.addEventListener('click', function (event) {
        if (event.target === settingModal) {
            settingModal.style.display = 'none';
        }
    });

    var settingModalBtn = document.getElementById('settingModalBtn');
    settingModalBtn.addEventListener('click', function () {
        settingModal.style.display = 'none';
    });



    //Theme Modal logic
    var colors = {
        'blackBtn': ['black', 'white'],
        'whiteBtn': ['white', 'black'],
        'blueBtn': ['blue', 'white'],
        'pinkBtn': ['#ed1e79', 'white'],
        'grayBtn': ['#607d8b', 'white'],
        'pplBtn': ['#a700a5', 'white'],
        'greenBtn': ['#00ad98', 'white'],
        'yellowBtn': ['#ffac02', 'white']
    };

    var blackBtn = document.getElementById('blackBtn');
    var whiteBtn = document.getElementById('whiteBtn');
    var blueBtn = document.getElementById('blueBtn');
    var pinkBtn = document.getElementById('pinkBtn');
    var grayBtn = document.getElementById('grayBtn');
    var pplBtn = document.getElementById('pplBtn');
    var greenBtn = document.getElementById('greenBtn');
    var yellowBtn = document.getElementById('yellowBtn');

    blackBtn.addEventListener('click', function () {

        setlocalStorageTheme(colors.blackBtn[1], colors.blackBtn[0]);

    });

    whiteBtn.addEventListener('click', function () {

        setlocalStorageTheme(colors.whiteBtn[1], colors.whiteBtn[0]);

    });

    blueBtn.addEventListener('click', function () {

        setlocalStorageTheme(colors.blueBtn[1], colors.blueBtn[0]);

    });

    pinkBtn.addEventListener('click', function () {

        setlocalStorageTheme(colors.pinkBtn[1], colors.pinkBtn[0]);

    });


    grayBtn.addEventListener('click', function () {

        setlocalStorageTheme(colors.grayBtn[1], colors.grayBtn[0]);

    });

    pplBtn.addEventListener('click', function () {

        setlocalStorageTheme(colors.pplBtn[1], colors.pplBtn[0]);

    });

    greenBtn.addEventListener('click', function () {

        setlocalStorageTheme(colors.greenBtn[1], colors.greenBtn[0]);

    });

    yellowBtn.addEventListener('click', function () {
        setlocalStorageTheme(colors.yellowBtn[1], colors.yellowBtn[0]);
    });

});

function getlocalStorage(element) {
    const storedNumber = localStorage.getItem('number');
    if (storedNumber) {
        element.textContent = storedNumber;
    }

    const storedColor = localStorage.getItem('color');
    const storedBackground = localStorage.getItem('background');
    const storedModalBackground = localStorage.getItem('modalbackground');
    console.log(storedColor, storedBackground, storedModalBackground);
    if (storedColor && storedBackground && storedModalBackground) {
        document.body.style.backgroundColor = storedBackground;
        document.body.style.color = storedColor;
        var number = document.querySelectorAll('.number, h3, p');
        number.forEach(function (element) {
            element.style.color = storedColor;
        });

        var modalbackground = document.querySelectorAll('.modal');
        modalbackground.forEach(function (element) {
            element.style.backgroundColor = storedBackground;
        });

        var iElements = document.querySelectorAll('i');
        iElements.forEach(function (element) {
            element.style.color = storedColor;
        });

        var closeModalBtn = document.querySelectorAll('.modalBtn i');
        closeModalBtn.forEach(function (element) {
            element.style.borderColor = storedColor;
        });

        var tableBorder = document.querySelector('.tableDiv');
        tableBorder.style.borderColor = storedColor;

        var linkid = document.querySelector('#linkid a');
        linkid.style.color = storedColor;

        var resetButtons = document.querySelectorAll('.modalreset button');
        resetButtons.forEach(function (element) {
            element.style.color = storedColor;
        });
    }
}


function setlocalStorage(number) {
    localStorage.setItem('number', number);
}

function setlocalStorageTheme(color, background) {
    localStorage.setItem('color', color);
    localStorage.setItem('background', background);
    localStorage.setItem('modalbackground', background);
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
    var number = document.querySelectorAll('.number, h3, p');
    number.forEach(function (element) {
        element.style.color = color;
    });

    var modalbackground = document.querySelectorAll('.modal');
    modalbackground.forEach(function (element) {
        element.style.backgroundColor = background;
    });

    var iElements = document.querySelectorAll('i');
    iElements.forEach(function (element) {
        element.style.color = color;
    });

    var closeModalBtn = document.querySelectorAll('.modalBtn i');
    closeModalBtn.forEach(function (element) {
        element.style.borderColor = color;
    });

    var tableBorder = document.querySelector('.tableDiv');
    tableBorder.style.borderColor = color;

    var linkid = document.querySelector('#linkid a');
    linkid.style.color = color;

    var resetButtons = document.querySelectorAll('.modalreset button');
    resetButtons.forEach(function (element) {
        element.style.color = color;
    });
}
