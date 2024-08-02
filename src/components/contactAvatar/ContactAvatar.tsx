import { useState } from 'react';
import { Avatar, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

interface IProps {
  imageUrl?: string;
  size?: number;
}

export const ContactAvatar = ({ imageUrl, size = 40 }: IProps) => {
  const [isError, setIsError] = useState(false);

  return (
    <Box sx={{ width: size, height: size }}>
      <Avatar
        src={!isError ? imageUrl : undefined}
        sx={{
          width: size,
          height: size,
        }}
        onError={() => setIsError(true)}
      >
        {!imageUrl || isError ? <PersonIcon sx={{
              fontSize: size * 0.6,
            }}/> : null}
      </Avatar>
    </Box>
  );
};
