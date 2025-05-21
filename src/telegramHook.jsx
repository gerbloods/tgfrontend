const tg = window.Telegram.WebApp;

export function useTelegram() {
    if (!tg) {
      console.warn('Telegram WebApp not available');
      return {};
    }

    const onClose = () => {
        tg?.close();
    };

    const onToggleButton = () => {
        if (!tg) return;
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    };

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg?.initDataUnsafe?.user,
    };
}
