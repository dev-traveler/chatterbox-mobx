import React from "react";
import { observer } from "mobx-react";
import useStores from "hooks/useStores";
import Stack from "components/elements/Stack";
import MessageStack from "components/organisms/MessageStack";

function ChatContents() {
  const { messageStore } = useStores();

  return (
    <Stack
      sx={{
        flex: 1,
        backgroundColor: "#6cddff",
        p: 2,
      }}
    >
      {messageStore.messages.map(
        (message): JSX.Element => (
          <MessageStack key={message.id} message={message} />
        )
      )}
    </Stack>
  );
}

export default observer(ChatContents);
