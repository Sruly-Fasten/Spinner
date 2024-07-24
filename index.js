const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
    setTimeout(() => {
        setTimeout(() => {
            item.classList.add('active');
        }, 100 * index);
    }, 1000);
});