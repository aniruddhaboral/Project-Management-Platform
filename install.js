 if ('serviceWorker' in navigator && 'PushManager' in window) {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();

            const deferredPrompt = e;

            const installButton = document.createElement('button');
            installButton.textContent = '';
            installButton.style.position = 'fixed';
            installButton.style.bottom = '1px';
            installButton.style.left = '50%';
            installButton.style.transform = 'translateX(-50%)';
            installButton.style.zIndex = '9999';
            installButton.style.padding = '100% 100%';
            installButton.classList.add('btn-grad');
            installButton.style.color = 'white';
            installButton.style.border = 'none';
            installButton.style.borderRadius = '5px';
            installButton.style.cursor = 'pointer';

            installButton.addEventListener('click', () => {

                deferredPrompt.prompt();

                deferredPrompt.userChoice.then(choiceResult => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('App installed');
                    } else {
                        console.log('App installation declined');
                    }

                    installButton.style.display = 'none';
                });
            });

            document.body.appendChild(installButton);
        });
    }