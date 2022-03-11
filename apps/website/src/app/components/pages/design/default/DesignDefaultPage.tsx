import { PropsJustChildren } from '@appleptr16/elemental';
import { BoxProps, Box, Typography, Stack } from '@mui/material';
import { Hunt } from 'apps/website/src/app/model/hunt/Hunt.model';
import { huntQuery } from 'apps/website/src/app/model/hunt/Hunt.query';
import { LazyElement, LazyOnEmitStrategy } from '../../../base/LazyElement';
import { appQueryParams } from '../../../../util/AppQueryParams';
import { HuntWithUser } from '../../../../model/hunt/Hunt.model';

function navTo(hunt: HuntWithUser) {
    return () => appQueryParams().setQueryHunt(hunt.uuid).setLocation();
}
function OutlinedBox(props: PropsJustChildren & BoxProps) {
    return <Box {...props} color="primary.light" borderRadius={0} border={2} />;
}
function mapHuntToElement(hunt: HuntWithUser) {
    return (
        <OutlinedBox key={hunt.uuid} onClick={navTo(hunt)}>
            <Typography variant="h6" color="primary.contrastText">
                {hunt.title} , {hunt.createdBy?.username}
            </Typography>
        </OutlinedBox>
    );
}
function mapAllHuntsToElement(hunts: HuntWithUser[], i: number): JSX.Element {
    return (
        <Stack direction="column" spacing={1} key={i}>
            {hunts.map(mapHuntToElement)}
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
                stream={huntQuery.sharedWithMe$}
                mappingFn={mapAllHuntsToElement}
            />
        </Stack>
    );
}
function YourHunts() {
    return (
        <>
            <Typography fontSize="2rem" fontWeight="3">
                Your Hunts
            </Typography>
            <LazyElement
                onEmitStrategy={LazyOnEmitStrategy.REPLACE}
                stream={huntQuery.createdByMe$}
                mappingFn={mapAllHuntsToElement}
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
                    <YourHunts />
                </Box>
                <Box width="30rem"></Box>
            </Stack>
        </>
    );
}
