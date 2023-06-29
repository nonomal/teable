import { ApiExtraModels, ApiProperty, ApiPropertyOptional, getSchemaPath } from '@nestjs/swagger';
import { FieldType, IColumnMeta } from '@teable-group/core';
import { NumberOptionsDto } from './field-dto/number-field.dto';
import { SingleSelectOptionsDto } from './field-dto/single-select-field.dto';

@ApiExtraModels(SingleSelectOptionsDto)
@ApiExtraModels(NumberOptionsDto)
export class UpdateFieldRo {
  @ApiProperty({
    description: 'The name of the field.',
    example: 'Single Select',
  })
  name?: string;

  @ApiProperty({
    description: 'The description of the field.',
    example: 'this is a summary',
  })
  description?: string;

  @ApiProperty({
    description: 'The types supported by teable.',
    example: FieldType.SingleSelect,
    enum: FieldType,
  })
  type?: FieldType;

  @ApiPropertyOptional({
    description:
      "The configuration options of the field. The structure of the field's options depend on the field's type.",
    oneOf: [
      { $ref: getSchemaPath(SingleSelectOptionsDto) },
      { $ref: getSchemaPath(NumberOptionsDto) },
    ],
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;

  @ApiPropertyOptional({
    description: `
The defaultValue of the field. The datatype of the value depends on the field type.
singleLineText, longText, singleSelect, date, phoneNumber, email, url: string, example: "hello".
number, currency, percent, duration, rating: number, example: 1.
checkbox: boolean, example: true.
multipleSelect: string[], example: ["red", "blue"].
other fields do not support defaultValue.
`,
    example: 'light',
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;

  @ApiProperty({
    description:
      'A mapping of view IDs to their corresponding column metadata, including order, width, and hidden status',
    properties: {
      viewId: {
        type: 'object',
        properties: {
          order: { type: 'number' },
          width: { type: 'number' },
          hidden: { type: 'boolean' },
        },
      },
    },
  })
  columnMeta?: IColumnMeta;
}