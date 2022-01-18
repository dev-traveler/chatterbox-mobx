import React from "react";
import Box from "components/elements/Box";

function TextBubble(props: TextBubbleProps): JSX.Element {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid black",
        borderRadius: 2,
        backgroundColor: 'white',
        maxWidth: "min(60vw, 500px)",
      }}
    >
      {props.text}
    </Box>
  );
}

interface TextBubbleProps {
  text: string;
}

export default TextBubble;
