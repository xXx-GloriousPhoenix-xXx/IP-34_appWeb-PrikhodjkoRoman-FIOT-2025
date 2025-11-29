import { initRedirect } from "./initRedirect.js";

const socialMediaRefs = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/",
    telegram: "https://web.telegram.org/k/"
};

class SVGIcon extends HTMLElement {
    connectedCallback() {
        const src = this.getAttribute('src');
        const fileName = src.split('/').pop();
        const id = fileName.replace('.svg', '');
        fetch (src)
            .then(r => r.text())
            .then(svg => {
                this.innerHTML = svg;
                this.classList.add('icon');
                this.id = id;

                this.style.color='var(--normal_col)';
                this.style.transition = '250ms';

                this.addEventListener('mouseenter', () => {
                    this.style.color = 'var(--bright_col)';
                });
                this.addEventListener('mouseleave', () => {
                    this.style.color = 'var(--normal_col)';
                })

                initRedirect(id, socialMediaRefs[id]);
            })
            .catch(e => {
                console.error('Error while loading SVG:', e);
            });
    }
}

customElements.define('svg-icon', SVGIcon);