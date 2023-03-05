export class Modal {
    constructor(contentId, fallbackText) {
        this.fallbackText = fallbackText
        this.contentTemplateEl = document.getElementById(contentId)
        this.modalTemplateEl = document.getElementById('modal-template')
    }

    show() {
        if ('content' in document.createElement('template')) {
            const modalElememts = document.importNode(this.modalTemplateEl.content, true)
            this.modalElememt = modalElememts.querySelector('.modal')
            this.backdropElememt = modalElememts.querySelector('.backdrop')
            const contentElement = document.importNode(this.contentTemplateEl.content, true)

            this.modalElememt.appendChild(contentElement)

            document.body.insertAdjacentElement('afterbegin', this.modalElememt)
            document.body.insertAdjacentElement('afterbegin', this.backdropElememt)
        } else {
            // fallback code
            alert(this.fallbackText)
        }
    }

    hide() {
        if(this.modalElememt) {
            document.body.removeChild(this.modalElememt) // this.modalElement.remove()
            document.body.removeChild(this.backdropElememt)
            this.modalElememt = null
            this.backdropElememt = null
        }
    }
}