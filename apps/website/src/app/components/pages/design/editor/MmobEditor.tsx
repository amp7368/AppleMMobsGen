import { Box, Stack } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';
import { SectionEditor } from './SectionEditor';
import { DesignPreview as SectionPreview } from './SectionPreview';
import { DesignToolbox as SectionToolbox } from './SectionToolbox';
import { MMob } from '../../../../model/mmob/MMob.model';

export function MMobEditor(props: { mmob: MMob }) {
    return (
        <Stack
            boxSizing="border-box"
            direction="row"
            alignItems="stretch"
            justifyContent="space-between"
            height="100%"
            width="100%"
        >
            <Box flexGrow={1}>
                <SectionToolbox />
            </Box>
            <Box flexGrow={1}>
                <SectionEditor />
            </Box>
            <Box flexGrow={1}>
                <SectionPreview />
            </Box>
        </Stack>
    );
}
