import { NotificationContainer } from "./styles";

export const Notification = () => {
    const handleCloseNotification = () => {
        document.getElementById('notificationContainer')?.classList.remove('--shown');
    }

    return(
        <NotificationContainer onClick={handleCloseNotification} id="notificationContainer">
            El pedio se realizo correctamente
        </NotificationContainer>
    )
}