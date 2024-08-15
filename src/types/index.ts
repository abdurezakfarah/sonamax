export interface Link {
  name: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}
export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
}
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export type CustomIconProps = React.RefAttributes<SVGSVGElement> &
  Partial<React.SVGProps<SVGSVGElement>>;



/**
 * Extracts the type of items from an array type.
 *
 * This utility type helps to determine what kind of elements are inside a given array.
 *
 * @example
 * ```typescript
 * // If you have an array of numbers
 * type NumbersArray = number[];
 * // `NumberItem` will be `number`
 * type NumberItem = ArrayItem<NumbersArray>;
 *
 * // For an array of strings
 * type StringsArray = string[];
 * // `StringItem` will be `string`
 * type StringItem = ArrayItem<StringsArray>;
 * 
 * // For an array of mixed type
 * type MixedArray = (string | number | null | undefined)[];
 * // `MixedItem` will be `string | number | null | undefined`
 * type MixedItem = ArrayItem<StringsArray>;
 * ```
 * 
 * @typeparam T - The array type from which to extract the item type.
 * 
 * @returns The type of items within the array `T`.
 */
export type ItemType<T extends Array<any>> = T extends Array<infer I> ? I : never;

