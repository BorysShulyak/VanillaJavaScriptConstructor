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

const handleClick = () => {
    console.log('aff')
}

const list = (arr) => {
    arr.map(object => `<li onclick=${handleClick}>${object.name}</li>`)
}
export function card(image, title, text, groupItem, link, styles = '') {
    return `
        <div style="${styles}" class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${text}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${groupItem}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">${link}</a> 
            </div>
            <ul>
                ${list(['sasas','sasas','sasas','sasas','sasas','sasas','sasas'])}
            </ul>
        </div>
  `
}

export function carousel(images, styles = '') {
    return `
        <div style="${styles}" id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                        <img src="${images[0]}" class="d-block w-100" alt="..."/>
                    </div>
                ${images.map(src => `
                    <div class="carousel-item ">
                        <img src="${src}" class="d-block w-100" alt="..."/>
                    </div>
                `)}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    `
}
