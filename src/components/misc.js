import styled from "@emotion/styled";

export const StyledHr = styled.span`
  display: block;
  height: 8px;
  width: 136px;
  background-color: var(--color-primary);
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 32px 0;
`;

export const StyledLogo = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
