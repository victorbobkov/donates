import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'

export class App {
   #donateForm
   #donateList
   constructor() {
      this.#donateForm = new DonateForm()
      this.#donateList = new DonateList()
   }
   run() {
      const donateFormHTML = this.#donateForm.render()
      const donateListHTML = this.#donateList.render()
      document.body.append(donateFormHTML, donateListHTML)
   }
}