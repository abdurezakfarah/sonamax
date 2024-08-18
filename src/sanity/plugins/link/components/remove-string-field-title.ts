import type { StringFieldProps } from "sanity";

export function RemoveStringFieldTitle(props: StringFieldProps) {
  const { title, ...restProps } = props;
  return props.renderDefault(restProps as StringFieldProps);
}
