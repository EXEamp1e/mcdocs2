document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');

    if (myButton) {
        myButton.addEventListener('click', function() {
            alert('Hello, world!');

            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });

        myButton.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 12px rgba(0, 124, 186, 0.3)';
        });

        myButton.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    }
});