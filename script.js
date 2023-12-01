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


    //Setting Modal logic
    var settingIcon = document.getElementById('setting-icon');

});

function getlocalStorage(element) {
    const storedNumber = localStorage.getItem('number');
    if (storedNumber) {
        element.textContent = storedNumber;
    }
}


function setlocalStorage(number) {
    localStorage.setItem('number', number);
}