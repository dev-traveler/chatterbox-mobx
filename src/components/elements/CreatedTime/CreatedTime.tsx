import React from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Box from "components/elements/Box";
import Stack from "components/elements/Stack";

function CreatedTime(props: CreatedTimeProps): JSX.Element {
  const createdTime = format(props.createdTs, "aaa hh:mm", { locale: ko });

  return (
    <Stack sx={{ justifyContent: "flex-end" }}>
      <Box sx={{ mb: "4px" }}>{createdTime}</Box>
    </Stack>
  );
}

interface CreatedTimeProps {
  createdTs: number;
}

export default CreatedTime;
