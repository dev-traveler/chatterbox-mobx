import React from "react";
import Stack from "../../element/Stack";
import ChatHeader from "../../organism/ChatHeader";
import ChatContents from "../../organism/ChatContents";
import ChatFooter from "../../organism/ChatFooter";

function ChattingPage() {
  return (
    <Stack sx={{ height: "100vh" }}>
      <ChatHeader />
      <ChatContents />
      <ChatFooter />
    </Stack>
  );
}

export default ChattingPage;
