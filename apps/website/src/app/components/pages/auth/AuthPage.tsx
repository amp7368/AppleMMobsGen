import { RequestLogin } from '@api/io-model';
import { Box, Button, Input, Stack, Typography } from '@mui/material';
import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';

import { sessionService } from '../../../model/myself/session/Session.service';
import { PublicOnlyRouteInfo } from '../../../routes/PublicOnlyRouteInfo';
import { RouteInfo } from '../../../routes/RouteInfo';
import { PageWrapper } from '../PageWrapper';

function validAuthSubmit(form: RequestLogin) {
    sessionService.login(form);
    console.log('loggin in');
}
function badAuthSubmit() {
    console.log('failed submit');
}

function LoginRow() {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Box />
            <Button variant="contained" color="secondary" type="submit">
                <Typography fontWeight="fontWeightBold">Log in</Typography>
            </Button>
        </Stack>
    );
}
function AuthContents() {
    const { register, handleSubmit, formState } = useForm<RequestLogin>();
    return (
        <>
            <form onSubmit={handleSubmit(validAuthSubmit, badAuthSubmit)}>
                <Stack direction="column" spacing={2}>
                    <Input
                        {...register('username')}
                        type="text"
                        placeholder="Username"
                    />
                    <Input
                        {...register('password')}
                        type="password"
                        placeholder="Password"
                    />
                    <LoginRow />
                </Stack>
            </form>
            <Button
                onClick={() => {
                    validAuthSubmit({
                        username: 'appleptr16',
                        password: 'appleptr16',
                    });
                }}
                variant="contained"
                color="secondary"
                type="submit"
            >
                <Typography fontWeight="fontWeightBold">Bypass</Typography>
            </Button>
        </>
    );
}
export class AuthPage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new PublicOnlyRouteInfo(this);
    }
    override renderMainPage(): JSX.Element {
        return (
            <Box width="20rem">
                <AuthContents />
            </Box>
        );
    }
}
