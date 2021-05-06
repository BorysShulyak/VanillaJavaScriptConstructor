export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="col">${content}</div>`
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
    return `
        <p>
            <a class="btn btn-primary" data-toggle="collapse" href="${'#collapseExample' + type }" role="button" aria-expanded="false" aria-controls="${'collapseExample' + type }">
                ${type}
            </a>
        </p>
        <div class="collapse" id="${'collapseExample' + type }">
            <form name="${type}">
                <h5>${type}</h5>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="value" placeholder="value">
                </div>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="styles" placeholder="styles">
                </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
         </form>
         <hr />
        </div>
  `
}
