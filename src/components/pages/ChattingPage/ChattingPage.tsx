import React from "react";
import Stack from "components/elements/Stack";
import ChatHeader from "components/organisms/ChatHeader";
import ChatContents from "components/organisms/ChatContents";
import ChatFooter from "components/organisms/ChatFooter";

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
