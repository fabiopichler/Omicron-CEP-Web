
export class History<T> {

    public constructor(private readonly key: string) {}

    public setList(list: T[]) {
        localStorage.setItem(this.key, JSON.stringify(list))
    }

    public getList(): T[] | null {
        const list = localStorage.getItem(this.key);

        if (list)
            return JSON.parse(list);

        return null;
    }
}
