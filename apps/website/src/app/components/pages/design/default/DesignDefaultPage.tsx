import { PropsJustChildren } from '@appleptr16/elemental';
import { Box, BoxProps, Stack, Typography } from '@mui/material';
import { mmobQuery } from 'apps/website/src/app/model/mmob/MMob.query';

import { appQueryParams } from '../../../../util/AppQueryParams';
import { LazyElement, LazyOnEmitStrategy } from '../../../base/LazyElement';
import { MMob } from '../../../../model/mmob/MMob.model';

function navTo(mmob: MMob) {
    return () => appQueryParams().setQueryMMob(mmob.uuid).setLocation();
}
function OutlinedBox(props: PropsJustChildren & BoxProps) {
    return <Box {...props} color="primary.light" borderRadius={0} border={2} />;
}
function mapMMobToElement(mmob: MMob) {
    return (
        <OutlinedBox key={mmob.uuid} onClick={navTo(mmob)}>
            <Typography variant="h6" color="primary.contrastText">
                {mmob.getName()}, {mmob.uuid}
            </Typography>
        </OutlinedBox>
    );
}
function mapAllMMobsToElement(mmobs: MMob[], i: number): JSX.Element {
    return (
        <Stack direction="column" spacing={1} key={i}>
            {mmobs.map(mapMMobToElement)}
        </Stack>
    );
}

function YourMMobs() {
    return (
        <>
            <Typography fontSize="2rem" fontWeight="3">
                Your MMobs
            </Typography>
            <LazyElement
                onEmitStrategy={LazyOnEmitStrategy.REPLACE}
                stream={mmobQuery.selectAllMMob$}
                mappingFn={mapAllMMobsToElement}
            />
        </>
    );
}
export function DesignDefaultPage() {
    return (
        <>
            <Stack
                direction="row"
                color="text.primary"
                justifyContent="flex-start"
                spacing={2}
            >
                <Box width="30rem">
                    <YourMMobs />
                </Box>
                <Box width="30rem"></Box>
            </Stack>
        </>
    );
}
