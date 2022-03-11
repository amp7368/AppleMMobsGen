import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { SectionEditor } from './SectionEditor';
import { DesignPreview as SectionPreview } from './SectionPreview';
import { DesignToolbox as SectionToolbox } from './SectionToolbox';
import { Hunt } from '../../../../model/hunt/Hunt.model';

function resizeBox(size: string, element: ReactNode) {
    return <Box width={size}>{element}</Box>;
}
export function HuntEditor(props: { hunt: Hunt }) {
    return (
        <Stack direction="row">
            {props.hunt.title}
            {resizeBox('25%', <SectionToolbox />)}
            {resizeBox('40%', <SectionEditor />)}
            {resizeBox('25%', <SectionPreview />)}
        </Stack>
    );
}
