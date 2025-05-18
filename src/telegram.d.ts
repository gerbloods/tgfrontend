interface TelegramWebApp {
    initDataUnsafe: {
        user: {
            id: number;
            first_name: string;
            last_name: string;
            username: string;
            photo_url: string;
            language_code: string;
        };
    };
    MainButton: {
        isVisible: boolean;
        show: () => void;
        hide: () => void;
    };
    close: () => void;
}
interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}