// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentImageIndex;

    function showLightbox(index) {
        const imgSrc = galleryItems[index].querySelector('img').src;
        lightboxImage.src = imgSrc;
        lightbox.style.display = 'flex';
        currentImageIndex = index;
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            showLightbox(index);
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    prevBtn.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        showLightbox(currentImageIndex);
    });

    nextBtn.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        showLightbox(currentImageIndex);
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target !== lightboxImage && e.target !== prevBtn && e.target !== nextBtn) {
            lightbox.style.display = 'none';
        }
    });
});
