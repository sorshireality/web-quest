let level = 0;


document.addEventListener('DOMContentLoaded', () => {
    const stage1 = document.getElementById('stage-1')
    const stage2 = document.getElementById('stage-2')
    const stage3 = document.getElementById('stage-3')

    const start = document.getElementById('lc-1')
    const key = document.getElementById('key')
    const key2 = document.getElementById('key2')
    const lc2 = document.getElementById('lc-2')
    const lc3 = document.getElementById('lc-3')

    const stage2MessageSpan = document.getElementById('stage-2-message')

    start.addEventListener('click', startQuest);
    key.addEventListener('click', second)


    function startQuest() {
        if (level !== 0) return;

        level += 1;
        event.target.classList.remove('visit')
        const mainCanvas = document.getElementById('main');
        const allCells = mainCanvas.getElementsByTagName('div')
        for (let index = 0; index < allCells.length; index++) {
            allCells[index].classList.add('aero')
        }

    }

    function second(Event) {
        if (level === 1) level += 1;
        if (level !== 2) return;

        if (!Event.target.classList.contains('aero')) return;

        key2.classList.add('visit')

        let legal = true;

        const registerKey2 = () => {
            legal = false;
            key.classList.remove('visit')
            key.removeEventListener('click', second)
            lc2.classList.add('visit')
            lc2.addEventListener('click', third)
        }

        key2.addEventListener('click', registerKey2)
        setTimeout(() => {
            if (!legal) return;
            key2.classList.remove('visit')
            key2.removeEventListener('click', registerKey2)
        }, 1000)
    }

    function third() {
        if (level === 2) {
            level += 1;
            lc2.classList.remove('visit')
            lc2.removeEventListener('click', third)
        }
        if (level !== 3) return;


        stage1.style.display = 'none'
        stage2.style.display = 'flex'

        function type(text, speed = 'mid') {
            const speedObj = {
                'slow': 200,
                'mid': 100,
                'fast': 50
            }
            return new Promise((resolve) => {
                let index = 0;
                stage2MessageSpan.textContent = ""

                function typeWriter() {
                    if (index < text.length) {
                        stage2MessageSpan.textContent += text.charAt(index);
                        index++
                        setTimeout(typeWriter, speedObj[speed]); // Регулируйте скорость печати, изменяя значение таймаута
                    } else {
                        resolve(true);
                    }
                }

                typeWriter()
            })
        }


        const userButton1 = document.getElementById('user-button-1')
        const userButton2 = document.getElementById('user-button-2')

        firstQuestion();

        async function firstQuestion() {
            let text = "Hello. Im a quest..."
            await type(text)
            userButton1.textContent = 'Hello'
            userButton2.textContent = 'What?'
            userButton1.addEventListener('click', firstQuestionCorrectAction)
            userButton2.addEventListener('click', firstQuestionWrongAction)
        }

        async function firstQuestionWrongAction() {
            userButton2.removeEventListener('click', firstQuestionWrongAction)
            userButton1.textContent = ''
            userButton2.textContent = ''
            await type('...Q.u.e.s.t...', 'slow')
            userButton1.textContent = 'Hello'
            userButton2.textContent = 'What?'
            userButton1.addEventListener('click', firstQuestionCorrectAction)
            userButton2.addEventListener('click', firstQuestionWrongAction)
        }

        async function firstQuestionCorrectAction() {
            userButton1.textContent = ''
            userButton2.textContent = ''
            userButton2.removeEventListener('click', firstQuestionWrongAction)
            userButton1.removeEventListener('click', firstQuestionCorrectAction)
            await type("Well.well.w30.w.w........")
            userButton1.textContent = 'Hello'
            userButton2.textContent = 'What?'
            userButton1.addEventListener('click', secondQuestionWrongAction)
            userButton2.addEventListener('click', secondQuestionCorrectAction)
        }

        async function secondQuestionWrongAction() {
            userButton1.removeEventListener('click', secondQuestionWrongAction)
            userButton1.textContent = ''
            userButton2.textContent = ''
            await type('....||....|...', 'fast')
            await type('....|||...|...', 'fast')
            await type('....||||..|...', 'fast')
            userButton1.textContent = 'Hello'
            userButton2.textContent = 'What?'
            userButton1.addEventListener('click', secondQuestionWrongAction)
            userButton2.addEventListener('click', secondQuestionCorrectAction)
        }

        async function secondQuestionCorrectAction() {
            userButton1.textContent = ''
            userButton2.textContent = ''
            userButton1.removeEventListener('click', secondQuestionWrongAction)
            userButton2.removeEventListener('click', secondQuestionCorrectAction)
            userButton2.removeEventListener('click', thirdQuestionCorrectAction)

            await type(".....Bgh.........")
            await type("....I..n33.d..p.o.....wer....", 'fast')

            userButton1.textContent = 'WTF???'
            userButton2.textContent = 'Power?'
            userButton1.addEventListener('click', wrongThirdAnswerAction)
            userButton2.addEventListener('click', thirdQuestionCorrectAction)

        }

        async function wrongThirdAnswerAction() {
            userButton1.textContent = ''
            userButton2.textContent = ''
            userButton1.removeEventListener('click', wrongThirdAnswerAction)
            await type('/|->---<--|/', 'slow')
            await type("....I..n33.d..p.o.....wer....", 'fast')
            userButton1.textContent = 'WTF???'
            userButton2.textContent = 'Power?'
            userButton1.addEventListener('click', wrongThirdAnswerAction)
            userButton2.addEventListener('click', thirdQuestionCorrectAction)
        }

        async function thirdQuestionCorrectAction() {
            userButton1.textContent = ''
            userButton2.textContent = ''
            const airSupply = document.getElementById('air-supply')
            userButton2.removeEventListener('click', thirdQuestionCorrectAction)
            userButton1.removeEventListener('click', wrongThirdAnswerAction)

            await type("Yes, power...")

            userButton1.textContent = '[-/-/-/-/-/-/-]'
            userButton2.textContent = ']-------------['
            airSupply.style.display = 'block'
            fallSm(airSupply, 0)
            const objImg = airSupply.getElementsByTagName('img').item(0)
            objImg.addEventListener('click', stickAirSupply)
            objImg.addEventListener('contextmenu', unStickAirSupply)

        }

        let currentTarget = null; // Для сохранения текущего целевого элемента

        function watchForAirSupply(watchEvent) {
            if (!currentTarget) return; // Если нет целевого элемента, не делаем ничего
            const mouseX = watchEvent.clientX;
            const mouseY = watchEvent.clientY;
            currentTarget.style.top = `${mouseY - 10}px`;
            currentTarget.style.left = `${mouseX - 20}px`;
        }

        function checkItemUnder(watchEvent, targetId) {
            const x = watchEvent.clientX
            const y = watchEvent.clientY
            const underCursor = document.elementFromPoint(x, y)
            if (underCursor && underCursor.id === targetId) return true
            const underCursorParent = underCursor.parentElement
            underCursorParent.style.visibility = 'hidden'

            const secondUnderCursor = document.elementFromPoint(x, y)
            underCursorParent.style.visibility = 'visible'
            return secondUnderCursor.id === targetId
        }

        async function stickAirSupply(watchEvent) {
            currentTarget = watchEvent.target.parentElement; // Сохраняем целевой элемент для использования в watchForAirSupply
            if (checkItemUnder(watchEvent, 'user-button-1')) {
                await lastQuestionCorrectAction()
            }
            if (checkItemUnder(watchEvent, 'user-button-2')) {
                await lastQuestionWrongAction(currentTarget, watchEvent.clientY)
            }
            document.addEventListener('mousemove', watchForAirSupply);
        }


        function unStickAirSupply(event) {
            event?.preventDefault();
            document.removeEventListener('mousemove', watchForAirSupply);
            currentTarget = null; // Очищаем ссылку на целевой элемент после удаления обработчика
        }

        function lastQuestionWrongAction(target, clientY) {
            unStickAirSupply()
            fallSm(target, clientY)
        }

        async function lastQuestionCorrectAction(Event) {
            unStickAirSupply()
            const airSupply = document.getElementById('air-supply')
            const objImg = airSupply.getElementsByTagName('img').item(0)
            objImg.removeEventListener('click', stickAirSupply)
            objImg.removeEventListener('contextmenu', unStickAirSupply)

            await type('Correct!')
            lc3.classList.add('visit')
            lc3.addEventListener('click', launchPc)
        }

        function fallSm(div, position) {
            const gravity = 0.50; // Гравитация, может быть изменена для эффекта
            let velocity = 0;

            function fall() {
                velocity += gravity; // Увеличение скорости
                position += velocity; // Изменение позиции

                if (position < window.innerHeight - div.offsetHeight) {
                    div.style.top = `${position}px`; // Обновление позиции элемента
                    requestAnimationFrame(fall); // Продолжение анимации
                } else {
                    div.style.top = `${window.innerHeight - div.offsetHeight}px`; // Остановка на дне
                }
            }

            fall(); // Начало анимации
        }


    }
    launchPc()
    async function launchPc()
    {
        if (level === 3) {
            level += 1;
            lc3.classList.remove('visit')
            lc3.removeEventListener('click', launchPc)
        }
        if (level !== 4) return;

        stage2.style.display = 'none'
        stage3.style.display = 'flex'

        async function startClocks(){
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1; // Месяцы начинаются с 0
            const day = now.getDate();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            // Форматируем время в формат 12-часов с AM/PM
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const hours12 = hours % 12 || 12; // Преобразуем 0 в 12

            // Добавляем ведущий ноль к минутам, если нужно
            const minutesPadded = minutes.toString().padStart(2, '0');

            // Форматируем дату
            const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours12}:${minutesPadded} ${ampm}`;
            document.getElementById('desktop-bar-system-data-datetime-obj').textContent = formattedDate;
        }

        startClocks()
        setInterval(startClocks, 60000);

        document.getElementById('main').classList.add('pc-mode')
    }

})

