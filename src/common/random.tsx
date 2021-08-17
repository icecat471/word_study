
const getRandomNumber = (end: number): number => {
    end = Math.floor(end);
    return Math.floor(Math.random() * end);
}

export default getRandomNumber;