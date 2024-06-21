"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApostadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_apostador_dto_1 = require("./create-apostador.dto");
class UpdateApostadorDto extends (0, mapped_types_1.PartialType)(create_apostador_dto_1.CreateApostadorDto) {
}
exports.UpdateApostadorDto = UpdateApostadorDto;
//# sourceMappingURL=update-apostador.dto.js.map