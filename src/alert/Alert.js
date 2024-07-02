import Swal from 'sweetalert2';

export const showAlert = (icon, title, text) => {
  Swal.fire({
    icon,
    title,
    text,
    customClass: {
      popup: 'swal2-popup-custom',
      title: 'swal2-title-custom',
      content: 'swal2-content-custom',
      confirmButton: 'swal2-confirm-button-custom'
    },
    didOpen: () => {
      const popup = Swal.getPopup();
      popup.style.fontSize = '1.2rem';
      popup.style.padding = '1.5rem';

      const titleElement = Swal.getTitle();
      titleElement.style.fontSize = '1.5rem';

      const content = Swal.getHtmlContainer();
      content.style.fontSize = '1.2rem';

      const confirmButton = Swal.getConfirmButton();
      confirmButton.style.fontSize = '1.2rem';
      confirmButton.style.padding = '0.5rem 1rem';
    }
  });
};
