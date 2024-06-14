"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPronosticoByIdDto = void 0;
class GetPronosticoByIdDto {
    constructor(id) {
        this.id = id;
    }
    get values() {
        return { id: this.id };
    }
    static query(props) {
        const { id } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number', undefined];
        }
        return [undefined, new GetPronosticoByIdDto(id)];
    }
}
exports.GetPronosticoByIdDto = GetPronosticoByIdDto;
