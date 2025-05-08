// assets/js/utils/toast.js

export function showToast(message, type = 'info') {
    const toastId = `toast-${Date.now()}`;
    const iconMap = {
      success: 'check',
      danger: 'campaign',
      warning: 'warning',
      info: 'notifications'
    };
    const colorMap = {
      success: 'bg-gradient-success',
      danger: 'bg-gradient-danger',
      warning: 'bg-gradient-warning',
      info: 'bg-gradient-info'
    };
  
    const toastHtml = `
      <div id="${toastId}" class="toast fade p-2 mt-2 text-white ${colorMap[type] || 'bg-gradient-info'}" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-transparent border-0">
          <i class="material-icons-round text-white me-2">${iconMap[type] || 'notifications'}</i>
          <span class="me-auto text-white font-weight-bold">Notification</span>
          <i class="fas fa-times text-md text-white ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
        </div>
        <hr class="horizontal light m-0">
        <div class="toast-body text-white">
          ${message}
        </div>
      </div>
    `;
  
    let toastContainer = document.getElementById('toastContainer');
  
    // If no container exists, create one (auto-adds on first use)
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.className = 'position-fixed bottom-1 end-1 z-index-2';
      document.body.appendChild(toastContainer);
    }
  
    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
  
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  
    toastElement.addEventListener('hidden.bs.toast', () => {
      toastElement.remove();
    });
  }
  