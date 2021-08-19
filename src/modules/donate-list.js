export class DonateList {
   #donateListContainer
   #donates
   constructor(donates) {
      this.#donates = donates
      this.#donateListContainer = document.createElement('div')
      this.#donateListContainer.classList = 'donates-container'
   }

   render() {
      const donatesContainerTitle = document.createElement('h2')
      donatesContainerTitle.classList = 'donates-container__title'
      donatesContainerTitle.textContent = 'Список донатов'

      const donatesContainerDonates = document.createElement('div')
      donatesContainerDonates.classList = 'donates-container__donates'

      this.#donates = [
         {
            amount: 4,
            date: new Date(),
         },
         {
            amount: 6,
            date: new Date(Date.now() - 2e8),
         },
         {
            amount: 11,
            date: new Date(Date.now() - 4e8),
         },
         {
            amount: 5,
            date: new Date(Date.now() - 7e8),
         },
      ]

      for (let donate of this.#donates) {
         const donateItem = document.createElement('div')
         donateItem.classList = 'donate-item'
         donateItem.textContent = `${donate.date} - ${donate.amount}$`

         donatesContainerDonates.append(donateItem)
         this.#donateListContainer.append(donatesContainerTitle, donatesContainerDonates)
      }

      return this.#donateListContainer
   }
}