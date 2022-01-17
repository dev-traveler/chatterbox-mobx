import React, { useState } from "react";
import useStores from "hooks/useStores";
import Stack from "components/element/Stack";
import TextField from "components/element/TextField";
import Message from "model/Message";

function ChatFooter() {
  const { messageStore } = useStores();
  const [text, setText] = useState("");

  const handleSubmitText = (event: any) => {
    if (event.key === "Enter") {
      messageStore.add(new Message({ text }));
      setText("");
    }
  };

  const handleTextChange = (event: any): void => {
    setText(event.target.value);
  };

  return (
    <Stack direction="row" sx={{ backgroundColor: "#ffd66c" }}>
      <TextField
        sx={{ flex: 1 }}
        placeholder="메세지를 입력하세요"
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleSubmitText}
      />
    </Stack>
  );
}

export default ChatFooter;
