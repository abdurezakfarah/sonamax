import { Icons } from "@/components/icons";
import { Button, Menu, MenuButton, MenuItem } from "@sanity/ui";
import { type StringInputProps, set } from "sanity";
import styled from "styled-components";
import { LinkType } from "../types";

const LinkTypeMenuButton = styled(Button)`
  height: 35px;
  svg.lucide {
    height: 1rem;
    width: 1rem;
  }
`;

const LinkTypeMenuItem = styled(MenuItem)`
  svg.lucide {
    width: 1rem;
    height: 1rem;
  }
`;

export function LinkTypeInput(
  props: StringInputProps & { linkTypes: LinkType[] },
) {
  const { value, onChange, linkTypes } = props;

  const selectedLinkType =
    linkTypes.find((type) => type.value === value) || linkTypes[0];

  return (
    <MenuButton
      id="link-type-menu"
      button={
        <LinkTypeMenuButton
          mode="ghost"
          space={2}
          icon={selectedLinkType.icon}
          iconRight={Icons.chevronDown}
          title="Select link type"
          aria-label={`Select link type, currently selected: ${selectedLinkType.title}`}
        />
      }
      menu={
        <Menu>
          {linkTypes.map((type) => (
            <LinkTypeMenuItem
              key={type.value}
              text={type.title}
              icon={type.icon}
              onClick={() => onChange(set(type.value))}
              disabled={type.value === value}
            />
          ))}
        </Menu>
      }
      popover={{ portal: true }}
    />
  );
}
