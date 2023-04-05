export default class AviasalesApi {
  baseUrl = 'https://aviasales-test-api.kata.academy'

  async getSearchId() {
    const resalt = await fetch(`${this.baseUrl}/search`)
    if (!resalt.ok) {
      throw Error('Ошибка получения id')
    }
    return resalt.json().then((res) => res.searchId)
  }

  async getSerchTilets(id) {
    const resalt = await fetch(`${this.baseUrl}/tickets?searchId=${id}`)

    if (resalt.status === 500) {
      return this.getSerchTilets(id)
    }
    return resalt
  }
}
