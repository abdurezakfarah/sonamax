"use client";
import ReactMoment, { type MomentProps } from "react-moment";

export default function Moment({ ...props }: MomentProps) {
  const format = props.format || "DD MMMM YYYY";
  return <ReactMoment format={format} {...props} />;
}
