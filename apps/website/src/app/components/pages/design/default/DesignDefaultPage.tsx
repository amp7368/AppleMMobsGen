import { PropsJustChildren } from '@appleptr16/elemental';
import { BoxProps, Box, Typography, Stack } from '@mui/material';
import { Mmob } from 'apps/website/src/app/model/mmob/Mmob.model';
import { mmobQuery } from 'apps/website/src/app/model/mmob/Mmob.query';
import { LazyElement, LazyOnEmitStrategy } from '../../../base/LazyElement';
import { appQueryParams } from '../../../../util/AppQueryParams';
import { MmobWithUser } from '../../../../model/mmob/Mmob.model';

function navTo(mmob: MmobWithUser) {
    return () => appQueryParams().setQueryMmob(mmob.uuid).setLocation();
}
function OutlinedBox(props: PropsJustChildren & BoxProps) {
    return <Box {...props} color="primary.light" borderRadius={0} border={2} />;
}
function mapMmobToElement(mmob: MmobWithUser) {
    return (
        <OutlinedBox key={mmob.uuid} onClick={navTo(mmob)}>
            <Typography variant="h6" color="primary.contrastText">
                {mmob.title} , {mmob.createdBy?.username}
            </Typography>
        </OutlinedBox>
    );
}
function mapAllMmobsToElement(mmobs: MmobWithUser[], i: number): JSX.Element {
    return (
        <Stack direction="column" spacing={1} key={i}>
            {mmobs.map(mapMmobToElement)}
        </Stack>
    );
}

function SharedWithYou() {
    return (
        <Stack direction="column">
            <Typography fontSize="2rem" fontWeight="3" fontStyle="underline">
                Shared With You
            </Typography>
            <LazyElement
                onEmitStrategy={LazyOnEmitStrategy.REPLACE}
                stream={mmobQuery.sharedWithMe$}
                mappingFn={mapAllMmobsToElement}
            />
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
                stream={mmobQuery.createdByMe$}
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
                <Box width="30rem" bgcolor={'background'}>
                    <SharedWithYou />
                </Box>
                <Box width="30rem">
                    <YourMmobs />
                </Box>
                <Box width="30rem"></Box>
            </Stack>
        </>
    );
}
