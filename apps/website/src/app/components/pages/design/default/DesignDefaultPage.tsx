import { PropsJustChildren } from '@appleptr16/elemental';
import { Box, BoxProps, Stack, Typography } from '@mui/material';
import { mmobQuery } from 'apps/website/src/app/model/mmob/Mmob.query';

import { appQueryParams } from '../../../../util/AppQueryParams';
import { LazyElement, LazyOnEmitStrategy } from '../../../base/LazyElement';
import { MMob } from '../../../../model/mmob/Mmob.model';

function navTo(mmob: MMob) {
    return () => appQueryParams().setQueryMmob(mmob.getName()).setLocation();
}
function OutlinedBox(props: PropsJustChildren & BoxProps) {
    return <Box {...props} color="primary.light" borderRadius={0} border={2} />;
}
function mapMmobToElement(mmob: MMob) {
    return (
        <OutlinedBox key={mmob.getName()} onClick={navTo(mmob)}>
            <Typography variant="h6" color="primary.contrastText">
                {mmob.getName()}
            </Typography>
        </OutlinedBox>
    );
}
function mapAllMmobsToElement(mmobs: MMob[], i: number): JSX.Element {
    return (
        <Stack direction="column" spacing={1} key={i}>
            {mmobs.map(mapMmobToElement)}
        </Stack>
    );
}

function YourMmobs() {
    return (
        <>
            <Typography fontSize="2rem" fontWeight="3">
                Your Mmobs
            </Typography>
            <LazyElement
                onEmitStrategy={LazyOnEmitStrategy.REPLACE}
                stream={mmobQuery.selectAll()}
                mappingFn={mapAllMmobsToElement}
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
                    <YourMmobs />
                </Box>
                <Box width="30rem"></Box>
            </Stack>
        </>
    );
}
