const accordionItems = document.querySelectorAll('.accordion__item');

class Accordion {
    constructor (item) {
        this.item = item;
        this.summary = item.children[0];
        this.content = item.children[1];

        this.animation = null;
        this.summary.addEventListener('click', (e) => this.onClick(e));
    }
    
    onClick(e) {
        // hijack the default behavior of the accordion content expanding
        e.preventDefault();

        // when we later manually expand the content in order to retrieve it's height,
        // first hide it until we later run the animation
        this.item.style.overflow = 'hidden';
        
        this.item.open ? this.shrink() : this.open();
    }

    open() {
        // add a fixed height that us the height of the summary button
        this.item.style.height = `${this.summary.offsetHeight}px`;

        // add the [open] attribute to the accordion item
        this.item.open = true;

        // tell the animation to move on to the next frame and call the expand function
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        const startHeight = `${this.item.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

        this.animation = this.item.animate(
            { height: [startHeight, endHeight] },
            { duration: 400, easing: 'ease-out' }
        );

        this.animation.onfinish = () => this.onAnimationFinish(true);
    }

    shrink() {
        const startHeight = `${this.item.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight}px`;

        this.animation = this.item.animate(
            { height: [startHeight, endHeight] },
            { duration: 400, easing: 'ease-out' }
        );

        this.animation.onfinish = () => this.onAnimationFinish(false);
    }

    onAnimationFinish(open) {
        this.item.open = open;
        this.animation = null;
        this.item.style.height = '';
        this.item.style.overflow = '';
    }
}

accordionItems.forEach((item) => {
    new Accordion(item);
});