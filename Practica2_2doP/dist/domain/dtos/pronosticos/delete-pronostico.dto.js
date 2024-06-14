"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePronosticoDto = void 0;
class DeletePronosticoDto {
    constructor(id) {
        this.id = id;
    }
    get values() {
        return { id: this.id };
    }
    static delete(props) {
        const { id } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        return [undefined, new DeletePronosticoDto(id)];
    }
}
exports.DeletePronosticoDto = DeletePronosticoDto;
