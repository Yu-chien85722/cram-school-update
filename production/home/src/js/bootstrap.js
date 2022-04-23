import * as bootstrap from 'bootstrap';

export const initBootstrap = function (config) {
  // Enabling tooltips
  if (config.tooltip) {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // console.log(tooltipTriggerList);
    tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  // Enabling popovers
  if (config.popover) {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    // console.log(popoverTriggerList);
    popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl, {}));
  }

  // Enabling toasts
  if (config.toasts) {
    const toastTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]'));

    toastTriggerList.map((toastTriggerEl) => {
      // Define the target property
      let toastTarget = null;

      if (toastTriggerEl.nodeName === 'A') {
        toastTarget = toastTriggerEl.href || null;

        if (toastTarget.includes('#')) {
          toastTarget = `#${toastTarget.split('#').pop()}`;
        } else {
          return;
        }
      } else if (toastTriggerEl.nodeName === 'BUTTON') {
        toastTarget = toastTriggerEl.dataset.bsTarget || null;
      }

      // Check if the target exists
      const toastTargetEl = document.querySelector(toastTarget);

      if (!toastTargetEl) {
        return;
      }

      // Init toast
      const toast = new bootstrap.Toast(toastTargetEl);

      // Add click even to trigger
      toastTriggerEl.addEventListener('click', (event) => {
        event.preventDefault();
        toast.show();
      });
    });
  }
};
