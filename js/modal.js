window.addEventListener('load', function() {
    var modal = document.getElementById('miModal');
    var modalCloseButton = document.querySelector('.modal .btn-close');
  
    modal.classList.add('show');
    modal.style.display = 'block';
  
    modalCloseButton.addEventListener('click', closeModal);
  
    function closeModal() {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  });
  