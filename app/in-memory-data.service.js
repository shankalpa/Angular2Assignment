"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 11, name: 'Milk' },
            { id: 12, name: 'Bread' },
            { id: 13, name: 'Cereal' },
            { id: 14, name: 'Jam' },
            { id: 15, name: 'Butter' },
            { id: 16, name: 'Oatmeal' },
            { id: 17, name: 'Eggs' },
            { id: 18, name: 'Applie' },
            { id: 19, name: 'Orange' },
            { id: 20, name: 'Bacon' }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map