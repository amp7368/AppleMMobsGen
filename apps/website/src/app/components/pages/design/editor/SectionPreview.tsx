import { styled } from '@mui/material';

const StyledTextField = styled('textarea')(({ theme }) => ({
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.white,
    tabSize: '4',
}));
export function DesignPreview() {
    return (
        <StyledTextField
            onKeyPress={(event) => {
                if (event.key === 'Tab') {
                    event.defaultPrevented = true;
                }
            }}
        />
    );
}
