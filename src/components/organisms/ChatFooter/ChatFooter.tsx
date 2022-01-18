import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useStores from "hooks/useStores";
import Stack from "components/elements/Stack";
import TextField from "components/elements/TextField";
import Message from "model/Message";

function ChatFooter() {
  const { messageStore } = useStores();
  const [text, setText] = useState("");

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      messageStore.add(
        new Message({
          id: uuidv4(),
          text,
          createdTs: new Date().getTime(),
        })
      );
      setText("");
    }
  };

  const handleChange = (event: any): void => {
    setText(event.target.value);
  };

  return (
    <Stack direction="row" sx={{ backgroundColor: "#ffd66c" }}>
      <TextField
        sx={{ flex: 1 }}
        placeholder="메세지를 입력하세요"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Stack>
  );
}

export default ChatFooter;
