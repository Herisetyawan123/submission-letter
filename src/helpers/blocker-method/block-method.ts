function blockMethod(allowMethod: string[], method: string): boolean {
    return allowMethod.includes(method)
}

export default blockMethod;