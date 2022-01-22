import React from "react";
import { computed } from "mobx";
import { observer } from "mobx-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import useStores from "hooks/useStores";
import Stack from "components/elements/Stack";
import Avatar from "components/elements/Avatar";
import TextBubble from "components/bubbles/TextBubble";
import CreatedTime from "components/elements/CreatedTime";
import { IMessage } from "model/Message";

function MessageStack(props: MessageStackProps): JSX.Element {
  const { messageStore } = useStores();
  const { id, text, createdTs } = props.message;

  const prevMsg = computed(() => messageStore.getPrevMsg(id)).get();
  const nextMsg = computed(() => messageStore.getNextMsg(id)).get();
  const prevMsgCreatedTime = format(prevMsg?.createdTs || 0, "aaa hh:mm", {
    locale: ko,
  });
  const nextMsgCreatedTime = format(nextMsg?.createdTs || 0, "aaa hh:mm", {
    locale: ko,
  });
  const currMsgCreatedTime = format(createdTs, "aaa hh:mm", { locale: ko });
  const isSameTimeWithPrev = prevMsgCreatedTime === currMsgCreatedTime;
  const isSameTimeWithNext = nextMsgCreatedTime === currMsgCreatedTime;

  return (
    <Stack direction="row" spacing={1} sx={{ mt: isSameTimeWithPrev ? '2px' : '6px' }}>
      <Stack
        sx={{
          justifyContent: "center",
          visibility: isSameTimeWithPrev ? "hidden" : "",
        }}
      >
        <Avatar />
      </Stack>
      <TextBubble text={text} />
      {!isSameTimeWithNext && <CreatedTime createdTs={createdTs} />}
    </Stack>
  );
}

interface MessageStackProps {
  message: IMessage;
}

export default observer(MessageStack);
