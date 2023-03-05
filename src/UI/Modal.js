export class Modal {
    constructor(contentId, fallbackText) {
        this.fallbackText = fallbackText
        this.contentTemplateEl = document.getElementById(contentId)
        this.modalTemplateEl = document.getElementById('modal-template')
    }

    show() {
        if ('content' in document.createElement('template')) {
            const modalElememts = document.importNode(this.modalTemplateEl.content, true)
            const modalElememt = modalElememts.querySelector('.modal')
            const backdropElememt = modalElememts.querySelector('.backdrop')
            const contentElement = document.importNode(this.contentTemplateEl.content, true)

            modalElememt.appendChild(contentElement)

            document.body.insertAdjacentElement('afterbegin', modalElememt)
            document.body.insertAdjacentElement('afterbegin', backdropElememt)
        } else {
            // fallback code
            alert(this.fallbackText)
        }
    }

    hide() {}
}