import { ComponentProps } from '@/components/Form/src/types';

export type ComponentType = keyof Pick<
  ComponentProps,
  | 'Input'
  | 'InputNumber'
  | 'Select'
  | 'ApiSelect'
  | 'AutoComplete'
  | 'ApiTreeSelect'
  | 'Checkbox'
  | 'Switch'
  | 'DatePicker'
  | 'TimePicker'
  | 'RadioGroup'
  | 'RadioButtonGroup'
  | 'ApiRadioGroup'
>;
