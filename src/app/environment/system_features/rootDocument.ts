export const RootDocument = (function() {
    
    let instance;

    function getDocumentNode() {
        const root = document.getElementById('root') ?? document.body;
        return root;
    }
    
    return {
        getRoot() {
            if (!instance) {
                instance = getDocumentNode();
            }

            return instance;
        }
    }
})();