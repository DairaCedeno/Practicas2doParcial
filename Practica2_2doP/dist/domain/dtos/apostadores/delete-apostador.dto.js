"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteApostadorDto = void 0;
class DeleteApostadorDto {
    constructor(id) {
        this.id = id;
    }
    get values() {
        const returnObj = {};
        returnObj.id = this.id;
        return returnObj;
    }
    static delete(props) {
        const { id } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        return [undefined, new DeleteApostadorDto(id)];
    }
}
exports.DeleteApostadorDto = DeleteApostadorDto;
