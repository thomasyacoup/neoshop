import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};;

  width: 100%;

  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    max-width: 540px;
  }

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    max-width: 720px;
  }

  @media (min-width: ${({ theme }) => theme.media.laptop}) {
    max-width: 960px;
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    max-width: 1140px;
  }
`;
