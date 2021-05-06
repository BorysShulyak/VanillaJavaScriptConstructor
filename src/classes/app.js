import {Site} from './site'
import {Sidebar} from './sidebar'
import {Navigation} from "./navigation";

export class App {
  constructor(model) {
    this.model = model
  }

  init() {
    new Navigation('#header').render()

    const site = new Site('#site')
    site.render(this.model)

    const updateCallback = newBlock => {
      this.model.push(newBlock)
      site.render(this.model)
    }
    new Sidebar('#panel', updateCallback)
  }
}