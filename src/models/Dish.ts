class Dish {
    id: number
    image: string
    infos: string[]
    title: string
    rate: number
    describe: string

    constructor(
        id: number,
        image: string,
        infos: string[],
        title: string,
        rate: number,
        describe: string
    ){
        this.id = id
        this.image = image
        this.infos = infos
        this.title = title
        this.rate = rate
        this.describe = describe
    }
}

export default Dish