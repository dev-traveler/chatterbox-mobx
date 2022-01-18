import React from "react";
import Stack from "components/elements/Stack";
import TextBubble from "components/bubbles/TextBubble";
import CreatedTime from "components/elements/CreatedTime";
import { IMessage } from "model/Message";

function MessageStack(props: MessageStackProps): JSX.Element {
  const { text, createdTs } = props.message;
  return (
    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
      <TextBubble text={text} />
      <CreatedTime createdTs={createdTs} />
    </Stack>
  );
}

interface MessageStackProps {
  message: IMessage;
}

export default MessageStack;
