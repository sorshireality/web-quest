document.addEventListener('DOMContentLoaded', () => {
    const allApps = document.getElementsByClassName('desktop-app-tab')
    for (let index = 0; index < allApps.length; index++) {
        allApps[index].addEventListener('click', focusOnTab)
    }


    const puzzleApp = document.getElementById('puzzle-app');
    const closePuzzleApp = document.getElementById('close-app-puzzle')

    const puzzleAppIcon = document.getElementById('puzzle-icon')
    puzzleAppIcon.addEventListener('dblclick', puzzleAppOpen)

    closePuzzleApp.addEventListener('click', puzzleAppClose)
    bindDragAndDropForTab(puzzleApp)

    function puzzleAppOpen() {
        refreshTabOrder()
        puzzleApp.style.zIndex = '5'
        puzzleApp.style.visibility = 'visible'
    }

    function puzzleAppClose() {
        puzzleApp.style.visibility = 'hidden'
    }

    const systemApp = document.getElementById('system-app');
    const closeSystemApp = document.getElementById('close-app-system')

    const systemAppIcon = document.getElementById('system-icon')
    systemAppIcon.addEventListener('dblclick', systemAppOpen)

    closeSystemApp.addEventListener('click', systemAppClose)
    bindDragAndDropForTab(systemApp)

    function systemAppOpen() {
        refreshTabOrder()
        systemApp.style.zIndex = '5'
        systemApp.style.visibility = 'visible'
    }

    function systemAppClose() {
        systemApp.style.visibility = 'hidden'
    }


    const closeCryptApp = document.getElementById('close-app-crypt')
    closeCryptApp.addEventListener('click', cryptAppClose)
    const cryptApp = document.getElementById('crypt-app');
    const cryptAppIcon = document.getElementById('crypt-icon')
    cryptAppIcon.addEventListener('dblclick', cryptAppOpen)
    bindDragAndDropForTab(cryptApp)

    function cryptAppOpen() {
        refreshTabOrder()
        cryptApp.style.zIndex = '5'
        cryptApp.style.visibility = 'visible'
    }

    function cryptAppClose() {
        cryptApp.style.visibility = 'hidden'
    }


    const closeReCryptApp = document.getElementById('close-app-recryptor')
    closeReCryptApp.addEventListener('click', reCryptAppClose)
    const reCryptApp = document.getElementById('recryptor-app');
    bindDragAndDropForTab(reCryptApp)

    function reCryptAppOpen() {
        refreshTabOrder()
        reCryptApp.style.zIndex = '5'
        reCryptApp.style.visibility = 'visible'
    }

    function reCryptAppClose() {
        reCryptApp.style.visibility = 'hidden'
    }

    function focusOnTab() {
        refreshTabOrder()
        this.style.zIndex = '5'
    }

    function refreshTabOrder() {
        const allApps = document.getElementsByClassName('desktop-app-tab')
        for (let index = 0; index < allApps.length; index++) {
            allApps[index].style.zIndex = '4'
        }
    }

    function bindDragAndDropForTab(tab) {
        let tabPos = {top: 0, left: 0, x: 0, y: 0};
        tab.addEventListener('mousedown', function (e) {
            console.dir()
            if (!document.elementFromPoint(e.clientX, e.clientY).classList.contains('desktop-app-tab-header')) return;
            tabPos = {
                // Позиция мыши относительно таба
                left: tab.offsetLeft - e.clientX,
                top: tab.offsetTop - e.clientY,
                // Текущая позиция мыши
                x: e.clientX,
                y: e.clientY,
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });

        function mouseMoveHandler(e) {
            // Новая позиция таба
            const dx = e.clientX - tabPos.x;
            const dy = e.clientY - tabPos.y;

            // Ограничение перемещения внутри дива рабочего стола
            const desktopRect = document.getElementById('desktop-body-content').getBoundingClientRect();
            let newLeft = tab.offsetLeft + dx;
            let newTop = tab.offsetTop + dy;

            // Проверяем, чтобы таб не выходил за рамки
            newLeft = Math.min(desktopRect.width - tab.offsetWidth, Math.max(0, newLeft));
            newTop = Math.min(desktopRect.height - tab.offsetHeight, Math.max(0, newTop));

            tab.style.left = newLeft + 'px';
            tab.style.top = newTop + 'px';

            // Обновляем позицию для следующего события
            tabPos = {top: newTop, left: newLeft, x: e.clientX, y: e.clientY};
        }

        function mouseUpHandler() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }
    }

    const cryptCodeLineEdit = document.getElementById('crypt-code-line-edit')
    cryptCodeLineEdit.addEventListener('dblclick', editCodeLine)
    cryptCodeLineEdit.addEventListener('keypress', saveCodeLine)

    function saveCodeLine(Event) {
        if (Event.which !== 13) return;
        const targetElement = Event.target
        const paragraph = document.createElement('p')
        paragraph.textContent = targetElement.value.trim()
        cryptCodeLineEdit.innerHTML = paragraph.outerHTML
        sendCodeToExecution()
    }

    function sendCodeToExecution() {
        const cryptAppCode = document.getElementById('desktop-app-crypt-code')
        let cryptAppCodeP = cryptAppCode.getElementsByTagName('p')
        let code = ''
        for (let index = 0; index < cryptAppCodeP.length; index++) {
            code += cryptAppCodeP[index].textContent
        }

        try {
            const execution = eval(code)
            showCryptOutput(execution)
        } catch (Exception) {
            showCryptOutput(false)
        }


    }

    function showCryptOutput(status) {
        const block = document.getElementById('desktop-app-crypt-code-output')
        block.classList.remove('error')
        block.classList.remove('success')
        block.textContent = ''
        if (status) {
            block.innerHTML = `Success! Download recryptor : <a id=${'recryptor-download-button'} href=${''} >here</a>`
            const recryptorButton = document.getElementById('recryptor-download-button')
            recryptorButton.addEventListener('click', showRecryptor)
            block.classList.add('success')
            return
        }
        block.textContent = 'Error'
        block.classList.add('error')
    }

    function showRecryptor(watchEvent) {
        watchEvent.preventDefault()
        reCryptAppOpen();
    }
    function editCodeLine() {
        const input = document.createElement('input')
        input.classList.add('codeEditInput')
        input.classList.add('pixelify-sans-desktop')
        input.value = cryptCodeLineEdit.textContent
        input.textContent = cryptCodeLineEdit.textContent
        cryptCodeLineEdit.textContent = ''
        cryptCodeLineEdit.appendChild(input)
    }
})