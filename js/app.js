document.querySelector('#request')
    .addEventListener('click', async () => {
        // async -> await
        const permission = Notification.permission;
        if (permission === 'default') {
            // TODO: спрашиваем разрешение
            const response = await Notification.requestPermission();
            console.log(response);
        } else if (permission === 'granted') {
            // TODO: спокойно показываем уведомление
        } else if (permission === 'denied') {
            // TODO: показываем жалобное сообщение с просьбой включить уведомления
        }

    });

//Date -> сравнивать, смотреть, не осталось ли полчаса до совещания
// setInterval(() => {
//     const notification = new Notification('Hello from JS');
// }, 5000);

document.querySelector('#start')
    .addEventListener('click', () => {
        const notification = new Notification('Start', {
            body: 'Notification (вы начали работу)',
            icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png',
            badge: 'https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png',
            requireInteraction: true, // ждём, пока пользователь отвзаимодействует с уведомлением
            silent: false,
            tag: 'любая строка' // заменяет существующее уведомление, а не показывает новое
        });

        notification.addEventListener('close', () => {
            const time = setInterval(() => {
                alert('Вы уже работаете 25 мин, отдохните')
            }, 20000);
        });

        notification.addEventListener('click', () => {
            alert('you clicked at notification');
        });


    });


