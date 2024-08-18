import { Box, Flex, Stack } from "@sanity/ui";
import { type FieldMember, MemberField } from "sanity";
import { LinkInputProps } from "../types";

export function LinkInput(props: LinkInputProps) {
  const {
    value,
    members,
    renderAnnotation,
    renderBlock,
    renderDefault,
    renderField,
    renderInlineBlock,
    renderInput,
    renderItem,
    renderPreview,
  } = props;

  const renderers = {
    renderAnnotation,
    renderBlock,
    renderDefault,
    renderField,
    renderInlineBlock,
    renderInput,
    renderItem,
    renderPreview,
  };

  const typeMember = members.find(
    (member): member is FieldMember =>
      member.kind === "field" && member.name === "type",
  );

  const labelMember = members.find(
    (member): member is FieldMember =>
      member.kind === "field" && member.name === "label",
  );

  const restMembers = members.filter(
    (member): member is FieldMember =>
      member.kind === "field" && !["type", "label"].includes(member.name),
  );

  return (
    <Stack space={4}>
      <Flex gap={2}>
        {typeMember && <MemberField member={typeMember} {...renderers} />}
        {labelMember && (
          <Box flex={1}>
            <MemberField member={labelMember} {...renderers} />
          </Box>
        )}
      </Flex>
      {restMembers.map((member) => (
        <MemberField member={member} {...renderers} />
      ))}
    </Stack>
  );
}
