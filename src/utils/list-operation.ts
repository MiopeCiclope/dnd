const updateElement = <T>(list: T[], element: T) => {
    const index = list.indexOf(element);
    if (index !== -1) {
        list[index] = element;
        return [...list]
    } else {
        return null
    }
}

export {updateElement}