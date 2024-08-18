import { Icon } from "@/components/icons";
import { ObjectInputProps } from "sanity";

export type LinkInputProps = ObjectInputProps<LinkValue>;

export type InternalLink = {
  type: "internal";
  internalLink?: {
    _type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
};

export type URLLink = {
  type: "url";
  url?: string;
};

export type EmailLink = {
  type: "email";
  email?: string;
};

type PhoneLink = {
  type: "phone";
  phone?: string;
};

export type LinkValue = {
  _key?: string;
  _type?: "link";
  label: string;
} & (InternalLink | URLLink | EmailLink | PhoneLink);

export type LinkType = {
  title: string;
  value: string;
  icon: Icon;
};

export type LinkTypeOptions = {
  references?: Array<string>;
};

export interface LinkPluginOPtions extends LinkTypeOptions {}
