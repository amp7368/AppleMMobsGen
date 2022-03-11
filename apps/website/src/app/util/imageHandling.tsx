import styled from '@emotion/styled';

const Img = styled.img`
    height: 100%;
    width: 100%;
`;
function convert(src: any, alt: string) {
    return <Img src={src} alt={alt} />;
}
