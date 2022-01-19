import React from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Box from "components/elements/Box";
import Stack from "components/elements/Stack";
import Typography from "components/elements/Typography";

function CreatedTime(props: CreatedTimeProps): JSX.Element {
  const createdTime = format(props.createdTs, "aaa hh:mm", { locale: ko });

  return (
    <Stack sx={{ justifyContent: "flex-end" }}>
      <Box sx={{ mb: "4px" }}>
        <Typography variant="caption">{createdTime}</Typography>
      </Box>
    </Stack>
  );
}

interface CreatedTimeProps {
  createdTs: number;
}

export default CreatedTime;
