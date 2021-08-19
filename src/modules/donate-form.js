export class DonateForm {
   #container
   constructor() {
      this.#container = document.createElement('form')
      this.#container.className = 'donate-form'
   }

   render() {
      const totalAmount = document.createElement('h1')
      totalAmount.id = 'total-amount'
      totalAmount.textContent = '28$'

      const donateFormInputLabel = document.createElement('label')
      donateFormInputLabel.className = 'donate-form__input-label'
      donateFormInputLabel.textContent = 'Введите сумму в $'

      const donateFormDonateInput = document.createElement('input')
      donateFormDonateInput.className = 'donate-form__donate-input'
      donateFormDonateInput.name = 'amount'
      donateFormDonateInput.type = 'number'
      donateFormDonateInput.max = '100'
      donateFormDonateInput.min = '0'
      donateFormDonateInput.required = ''

      const donateFormSubmitButton = document.createElement('button')
      donateFormSubmitButton.className = 'donate-form__submit-button'
      donateFormSubmitButton.type = 'submit'
      donateFormSubmitButton.textContent = 'Задонатить'


      this.#container.append(totalAmount, donateFormInputLabel, donateFormDonateInput, donateFormSubmitButton)

      return this.#container
   }
}