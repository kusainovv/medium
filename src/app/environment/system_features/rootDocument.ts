export const rootDocument = (function () {
    let instance

    const getDocumentNode = () => {
        const root = document.getElementById("root") ?? document.body
        return root
    }

    return {
        getRoot() {
            if (!instance) {
                instance = getDocumentNode()
            }

            return instance as DocumentFragment
        },
    }
})()
